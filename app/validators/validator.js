const {LinValidator, Rule} = require('../../core/lin-validator')

class PositiveIntegerValidator extends LinValidator {
  constructor() {
    super()
    this.id = [new Rule('isInt', '需要传入正整数', { min: 5 })]
  }
}

module.exports = {
  PositiveIntegerValidator
}