const Project = require('../models').Project;
const sequelize = require('../models').sequelize;
const Sequelize = require('../models').Sequelize;
const Op = Sequelize.Op;
const logger = require('../utils/logger');
const uuidv4 = require('uuid/v4');
const Joi = require('../utils/joi');
// const Joi = require('joi');

const addprojSchema = {
    proj_name: Joi.string().max(200).required(),
    username: Joi.string().required(),
    desci: Joi.any(),
}
const updateprojSchema = {
    proj_id: Joi.string().required(),
    proj_name: Joi.string().max(200).required(),
    username: Joi.string().required(),
    desci: Joi.any(),
    status: Joi.string(),
}

module.exports = class ProjectService {
    /**
     * proj_name, username, desci
     * @param {*} projObj 
     */
    async addProject(projObj, t) {
        let result = Joi.validate(projObj, addprojSchema);
        if (result.error) {
            console.log(result.error);
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
            proj_id: uuidv4(),
            proj_name: projObj.proj_name,
            desci: projObj.desci,
            create_user_id: projObj.username,
            create_time: new Date(),
            modify_time: new Date()
        });
        await voProj.save({transaction: t});
        logger.info(`创建项目(${projObj.proj_name})成功`)
    }

    /**
     * proj_id, proj_name, username, desci
     * @param {*} projObj
     */
    async updateProject(projObj, t) {
        let result = Joi.validate(projObj, updateprojSchema);
        if (result.error) {
            console.log(result.error);
            throw new Error('更新项目失败');
        }

        let record = await Project.findOne({
            where: {
                proj_id: {
                    [Op.eq]: projObj.proj_id
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

        await record.save({transaction: t});
        logger.info(`更新项目(${projObj.proj_name})成功`)
    }

    deleteProject(id) {
        // TODO 删除项目，需要删除项目相关的所有记录
    }
    
    getList() {


    }
}
