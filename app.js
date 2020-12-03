const Koa = require("koa");
const app = new Koa();

// 初始化项目配置
const initManager = require('./core/init')
new initManager(app)

app.listen(3000, () => {
  console.log("server localhost:3000");
});
