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
			allowNull: false
		},
		desci: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		create_user_id: {
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
			defaultValue: 'CURRENT_TIMESTAMP(6)'
		},
		status: {
			type: DataTypes.ENUM('readonly','deleted','normal'),
			allowNull: true,
			defaultValue: 'normal'
		}
	}, {
		tableName: 'af_project',
		timestamps: false,
		freezeTableName: true
	});
};
