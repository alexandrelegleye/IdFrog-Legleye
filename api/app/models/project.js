const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Project extends Model {};

Project.init({
	name: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	invest_type: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
	amount_target: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
    rate: {
		type: DataTypes.DECIMAL,
		allowNull: false,
	},
    end_time: {
		type: DataTypes.DATEONLY,
		allowNull: false,
	},
    img_url: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    web_url: {
		type: DataTypes.TEXT,
		allowNull: true,
	},
    title: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
    resume: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
    description: {
		type: DataTypes.TEXT,
		allowNull: false,
	},
    visibility: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false,
	},
}, {
	sequelize,
	tableName: 'project',
});

module.exports = Project;