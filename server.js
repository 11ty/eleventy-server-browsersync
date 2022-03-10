const BrowserSync = require("browser-sync");

const debug = require("debug")("EleventyBrowserSync");

const serverCache = {};

const DEFAULT_OPTIONS = {
  port: 8080,
  ignore: ["node_modules"],
  watch: false,
  open: false,
  notify: false,
  ui: false, // Default changed in 1.0
  ghostMode: false, // Default changed in 1.0
  index: "index.html",

  // Non-standard Browser-Sync options
  // These must be removed below in the `getBrowserSyncOptions` method

  // May be overridden by Eleventy, adds a virtual base directory to your project
  pathPrefix: "/",
}

class EleventyBrowserSync {
  static getServer(...args) {
    let [name] = args;

    if (!serverCache[name]) {
      serverCache[name] = new EleventyBrowserSync(...args);
    }

    return serverCache[name];
  }

  constructor(name, dir, options = {}) {
    this.name = name;
    this.options = Object.assign({}, DEFAULT_OPTIONS, options);

    // Directory to serve
    if(!dir) {
      throw new Error("Missing `dir` to serve.");
    }
    this.dir = dir;
  }

  getBrowserSyncOptions(port) {
    let serverConfig = {
      baseDir: this.dir,
    };

    if(this.options.pathPrefix !== "/") {
      serverConfig.baseDir = undefined;
      serverConfig.routes = {};
      serverConfig.routes[this.options.pathPrefix] = this.dir;
    }

    let options = Object.assign({
      server: serverConfig,
    }, this.options);

    // We don’t pass these to browser-sync’s init method
    delete options.module;
    delete options.pathPrefix;
    delete options.logger;
    delete options.setup;

    if(port) {
      options.port = port;
    }

    return options;
  }

  get server() {
    if (this._server) {
      return this._server;
    }

    this._server = BrowserSync.create("eleventy-server");

    return this._server;
  }

  serve(port) {
    let options = this.getBrowserSyncOptions(port);
    this.server.init(options);
  }

  close() {
    this.server.exit();
  }

  sendError({ error }) {
    // Do nothing, this feature is not supported by browser-sync
  }

  reload({ subtype }) {
    this.server.reload(subtype === "css" ? "*.css" : undefined);
  }
}

module.exports = EleventyBrowserSync;
