const { LinValidator, Rule } = require('../../core/lin-validator')

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super()
    this.id = [new Rule('isInt', '需要传入正整数', { min: 5 })]
  }
}

class RegisterValidator extends LinValidator {
  constructor() {
    super()
    this.email = [
      new Rule('isEmail', '不符合Email规则'),
    ]
    this.password = [
      new Rule('isLength', '密码长度为6至32位字符', {
        min: 6,
        max: 32,
      }),
      new Rule('matches', '密码不能是纯数字、纯字母、纯特殊字符', /((?=.*[a-z])(?=.*\d)|(?=[a-z])(?=.*[#@!~%^&*])|(?=.*\d)(?=.*[#@!~%^&*]))[a-z\d#@!~%^&*]{8,16}/i),
    ]
    this.password2 = this.password
    this.nickname = [
      new Rule('isLength', '昵称长度为4至32位字符', {
        min: 4,
        max: 32,
      }),
    ]
  }

  validatePassword(vals) {
    const pwd1 = vals.body.password
    const pwd2 = vals.body.password2
    if (pwd1 !== pwd2) {
      throw Error('两次密码不相同')
    }
  }
}

module.exports = {
  PositiveIntegerValidator,
  RegisterValidator,
}
