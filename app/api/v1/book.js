const Router = require('koa-router')

const router = new Router()
// const { ParameterException } = require('../../../core/http-exception')
const { PositiveIntegerValidator } = require('../../validators/validator')

router.get('/v1/book/detail', async (ctx, next) => {
  ctx.body = {
    detail: 'book',
  }
  next()
})

router.post('/v1/:id/list', async (ctx, next) => {
  // throw new ParameterException('ddd', 200)
  const v = await new PositiveIntegerValidator().validate(ctx)
  const id = v.get('path.id')
  ctx.body = {
    id,
  }
  next()
})

module.exports = router
