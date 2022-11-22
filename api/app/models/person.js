const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Person extends Model {};

Person.init({
	first_name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	last_name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	birth_date: {
		type: DataTypes.DATEONLY,
		allowNull: true,
		defaultValue: '#FFFFFF',
	},
    birth_place: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    gender: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    status: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    nationality: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    adress: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    city: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    zip_code: {
		type: DataTypes.INTEGER,
		allowNull: true,
	},
    phone_number: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    avatar_url: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
}, {
	sequelize,
	tableName: 'person',
});

module.exports = Person;