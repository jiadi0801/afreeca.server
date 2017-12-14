/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('af_project', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		proj_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		proj_name: {
			type: DataTypes.STRING(200),
			allowNull: true
		},
		desci: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		create_user_id: {
			type: DataTypes.STRING(100),
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
			defaultValue: 'CURRENT_TIMESTAMP(6)'
		}
	}, {
		tableName: 'af_project',
		timestamps: false,
		freezeTableName: true
	});
};
