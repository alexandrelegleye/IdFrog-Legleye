const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Profile extends Model {};

Profile.init({
	email: {
		type: DataTypes.TEXT,
		allowNull: false,
		unique: true,
	},
	password: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	pseudo: {
		type: DataTypes.TEXT,
		allowNull: false,
        unique: true,
	},
    is_admin: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
}, {
	sequelize,
	tableName: 'profile',
	defaultScope: {
		attributes: {
		  exclude: ['password']
		},
	},
	scopes: {
		withPassword: {
		  attributes: {
			include: ['password']
		  }
		}
	},
});

module.exports = Profile;