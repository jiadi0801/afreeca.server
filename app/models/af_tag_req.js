/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('af_tag_req', {
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
		tagname: {
			type: DataTypes.STRING(200),
			allowNull: true
		}
	}, {
		tableName: 'af_tag_req',
		timestamps: false,
		freezeTableName: true
	});
};
