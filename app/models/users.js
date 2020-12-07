const { Model, DataTypes } = require('sequelize')
const { sequelize } = require('../../core/db')

class User extends Model {}

User.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nickName: DataTypes.STRING,
  email: DataTypes.STRING,
  password: DataTypes.STRING,
  openid: {
    type: DataTypes.STRING(64),
    unique: true,
  },
}, {
  sequelize,
})

module.exports = {
  User,
}
