const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Category extends Model {};

Category.init({
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
		unique: true,
	},
	color: {
		type: DataTypes.TEXT,
		allowNull: false,
		defaultValue: '#FFFFFF',
	},	
}, {
	sequelize,
	tableName: 'category',
});

module.exports = Category;