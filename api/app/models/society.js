const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Society extends Model {};

Society.init({
	siret: {
		type: DataTypes.TEXT,
		allowNull: false,
		unique: true,
	},
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	status: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
}, {
	sequelize,
	tableName: 'society',
});

module.exports = Society;