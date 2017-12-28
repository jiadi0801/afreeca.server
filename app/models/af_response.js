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
			allowNull: false
		},
		res_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		desci: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		status_code: {
			type: DataTypes.STRING(10),
			allowNull: false
		},
		header: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		body: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		raw_body: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		modify_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'af_response',
		timestamps: false,
		freezeTableName: true
	});
};
