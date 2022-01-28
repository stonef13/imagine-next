const Sequelize = require('sequelize')
const db = require('../db')

const Post = db.define('post', {
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  color: {
    type: Sequelize.STRING,
    defaultValue: 'white'
  },
  likeCount: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  }
})

module.exports = Post
