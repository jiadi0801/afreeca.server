/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('af_request', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		req_id: {
			type: DataTypes.STRING(100),
			allowNull: false
		},
		req_name: {
			type: DataTypes.STRING(200),
			allowNull: false
		},
		desci: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		req_url: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		req_method: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		header: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		header_statusmap: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		params: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		formdata: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		proj_id: {
			type: DataTypes.STRING(100),
			allowNull: false
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
		tableName: 'af_request',
		timestamps: false,
		freezeTableName: true
	});
};
