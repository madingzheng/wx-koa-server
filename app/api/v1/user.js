const Router = require('koa-router')

const { RegisterValidator } = require('../../validators/validator')

const router = new Router({
  prefix: '/v1/user',
})

const { User } = require('../../models/users')

router.post('/register', async (ctx, next) => {
  const v = await new RegisterValidator().validate(ctx)
  const user = {
    nickName: v.get('body.nickname'),
    password: v.get('body.password'),
    email: v.get('body.email'),
  }
  await User.create(user)
  ctx.body = 'success'
  next()
})

module.exports = router
