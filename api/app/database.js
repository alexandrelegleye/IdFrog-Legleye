const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
	define: {
		// Transformer tous les noms des colonnes du camelCase vers snake_case
		underscored: true,
		// On précise les nouveaux noms des colonnes 'createdAt' et 'updatedAt' en snake_case
		createdAt: 'created_at',
		updatedAt: 'updated_at',
	},
});

module.exports = sequelize;