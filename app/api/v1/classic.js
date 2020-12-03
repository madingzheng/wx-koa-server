const Router = require('koa-router')

const router = new Router()

router.get('/v1/classic/detail', (ctx, next) => {
  ctx.throw(1100, {
    url: ctx.request.path,
    message: 'name required',
  });
  next()
})

module.exports = router
