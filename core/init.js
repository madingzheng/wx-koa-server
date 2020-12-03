const Router = require("koa-router");
const requireDirectory = require("require-directory");
const catchError = require('../middlewares/exception')

class InitManager {
  constructor(app) {
    InitManager.app = app
    InitManager.loadHttpException()
    InitManager.initLoadRouters()
    InitManager.initConfig()
  }

  static initLoadRouters() {
    const apiDirectory = `${process.cwd()}/app/api`
    requireDirectory(module, apiDirectory, {
      visit: (obj) => {
        if (obj instanceof Router) {
          InitManager.app.use(obj.routes())
        }
      },
    });
  }

  static initConfig(path = '') {
    const configPath = path || process.cwd()+ '/config/config.js'
    const config = require(configPath)
    global.config = config
  }

  static loadHttpException() {
    InitManager.app.use(catchError)
  }
}

module.exports = InitManager;
