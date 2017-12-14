/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('sys_user', {
		id: {
			type: DataTypes.BIGINT,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		username: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		password: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		nickname: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		erp: {
			type: DataTypes.STRING(100),
			allowNull: true
		},
		create_time: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'sys_user',
		timestamps: false,
		freezeTableName: true
	});
};
