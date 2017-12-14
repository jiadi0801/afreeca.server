/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('af_response', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		res_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		res_name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		desci: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status_code: {
			type: DataTypes.STRING(10),
			allowNull: true
		}
	}, {
		tableName: 'af_response',
		timestamps: false,
		freezeTableName: true
	});
};
