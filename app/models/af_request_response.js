/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('af_request_response', {
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
		res_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		}
	}, {
		tableName: 'af_request_response',
		timestamps: false,
		freezeTableName: true
	});
};
