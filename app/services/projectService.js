const Project = require('../models').Project;
const sequelize = require('../models').sequelize;
const Sequelize = require('../models').Sequelize;
const Op = Sequelize.Op;
const logger = require('../utils/logger');

module.exports = class ProjectService {
    /**
     * proj_name, username, desci
     * @param {*} projObj 
     */
    async addProject(projObj) {
        if (!projObj.proj_name || !projObj.username) {
            logger.error(`新建项目失败，不存在项目名称(${projObj.proj_name})或创建人(${projObj.username})`);
            throw new Error('新建项目失败');
        }

        let record = await Project.findOne({
            where: {
                proj_name: {
                    [Op.eq]: projObj.proj_name
                },
                create_user_id: {
                    [Op.eq]: projObj.username
                }
            }
        });

        if (record) {
            logger.error(`尝试创建重名项目，项目名称(${projObj.proj_name})`);
            throw new Error('和已有项目重名');
        }

        let voProj = Project.build({
            proj_name: projObj.proj_name,
            desci: projObj.desci,
            create_user_id: projObj.username,
            create_time: new Date(),
            modify_time: new Date()
        });
        await voProj.save();
        logger.info(`创建项目(${projObj.proj_name})成功`)
    }

    /**
     * id, proj_name, username, desci
     * @param {*} projObj 
     */
    async updateProject(projObj) {
        if (!projObj.proj_name || !projObj.username) {
            logger.error(`更新项目失败，不存在项目名称(${projObj.proj_name})或创建人(${projObj.username})`);
            throw new Error('更新项目失败');
        }

        let record = await Project.findOne({
            where: {
                id: {
                    [Op.eq]: projObj.id
                },
                create_user_id: {
                    [Op.eq]: projObj.username
                }
            }
        });

        if (!record) {
            logger.error(`不存在项目`);
            throw new Error('更新项目失败');
        }
        record.proj_name = projObj.proj_name;
        record.desci = projObj.desci;
        record.status = projObj.status || 'normal';
        record.modify_time = new Date();

        await record.save();
        logger.info(`更新项目(${projObj.proj_name})成功`)
    }

    deleteProject(id) {
        // TODO 删除项目，需要删除项目相关的所有记录
    }
    
    getList() {


    }
}
