const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Comment extends Model {};

Comment.init({
	text: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
}, {
	sequelize,
	tableName: 'comment',
});

module.exports = Comment;