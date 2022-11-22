const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Contribution extends Model {};

Contribution.init({
	invested_amount: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	sold: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
	},
}, {
	sequelize,
	tableName: 'contribution',
});

module.exports = Contribution;