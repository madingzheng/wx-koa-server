const Koa = require('koa');

const app = new Koa();
// 初始化项目配置
const InitManager = require('./core/init')

const init = new InitManager(app)
init.initCore()

require('./app/models/users')

app.listen(3000, () => {
  console.log('server localhost:3000');
});
