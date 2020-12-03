/**
 * 捕获异常
 */

const { HttpException } = require('../core/http-exception')

const catchError = async (ctx, next) => {
  try {
    await next()
  } catch (error) {
    if (global.config.environment === 'dev') {
      throw error
    }
    if (error instanceof HttpException) {
      ctx.body = {
        ...error,
        request: `${ctx.method} ${ctx.path}`,
      }
    } else {
      ctx.body = '未知错误'
    }
  }
}

module.exports = catchError
