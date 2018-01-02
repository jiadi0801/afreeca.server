const Res = require('../models').Res;
const sequelize = require('../models').sequelize;
const Sequelize = require('../models').Sequelize;
const Op = Sequelize.Op;
const logger = require('../utils/logger');
const uuidv4 = require('uuid/v4');
const Joi = require('../utils/joi');

const new_res_schema = {
    res_name: Joi.string().max(200).required(),
    desci: Joi.any(),
    status_code: Joi.string().required(),
    header: Joi.string().allow('').jsonstring(),
    body: Joi.any(),
    raw_body: Joi.any(),
    req_id: Joi.string().max(100).required(),
};

const update_res_schema = Object.assign({
    res_id: Joi.string().max(100).required(),
}, new_res_schema);

module.exports = class ResponseService {
    async newResponse(obj, t) {
        let result = Joi.validate(obj, new_res_schema);
        if (result.error) {
            console.log(result.error);
            throw new Error('新建api响应失败');
        }

        let record = await Res.findOne({
            where: {
                res_name: {
                    [Op.eq]: obj.res_name
                },
                req_id: {
                    [Op.eq]: obj.req_id
                }
            }
        });

        if (record) {
            logger.error(`尝试创建重名api响应，api名称(${obj.proj_name})`);
            throw new Error('和已有api响应重名');
        }

        let voProj = Res.build(Object.assign({
            res_id: uuidv4(),
            create_time: new Date(),
            modify_time: new Date()
        }, obj));

        await voProj.save({transaction: t});
        logger.info(`创建api响应(${obj.res_name})成功`)
    }

    async updateResponse(obj, t) {
        let result = Joi.validate(obj, update_res_schema);
        if (result.error) {
            console.log(result.error);
            throw new Error('更新api响应失败');
        }

        let record = await Res.findOne({
            where: {
                res_id: {
                    [Op.eq]: obj.res_id
                },
                req_id: {
                    [Op.eq]: obj.req_id
                }
            }
        });

        if (!record) {
            logger.error(`不存在api响应`);
            throw new Error('更新api响应失败');
        }

        record = Object.assign(record, obj, {
            modify_time: new Date()
        });
        
        await record.save({transaction: t});
        logger.info(`更新api(${obj.res_name})成功`)
    }

    async deleteResponse(res_id, req_id) {
        // 删除指定api请求
    }

    async getResList(req_id) {

    }
}
