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
			allowNull: true
		},
		req_name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		req_url: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		req_method: {
			type: DataTypes.STRING(20),
			allowNull: true
		},
		desci: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		formdata: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		content_type: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: 'af_request',
		timestamps: false,
		freezeTableName: true
	});
};
