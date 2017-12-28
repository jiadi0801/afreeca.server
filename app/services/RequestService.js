const Req = require('../models').Req;
const sequelize = require('../models').sequelize;
const Sequelize = require('../models').Sequelize;
const Op = Sequelize.Op;
const logger = require('../utils/logger');
const uuidv4 = require('uuid/v4');
const Joi = require('../utils/joi');

const new_req_schema = {
    req_name: Joi.string().max(200).required(),
    desci: Joi.any(),
    req_url: Joi.string().required(),
    req_method: Joi.string().required(),
    header: Joi.string().allow('').jsonstring(),
    header_statusmap: Joi.string().allow('').jsonstring(),
    params: Joi.string().allow(''),
    formdata: Joi.string().allow(''),
    proj_id: Joi.string().max(100).required(),
};

const update_req_schema = Object.assign({
    req_id: Joi.string().max(100).required(),
}, new_req_schema);

module.exports = class RequestService {
    async newRequest(obj) {
        let result = Joi.validate(obj, new_req_schema);
        if (result.error) {
            console.log(result.error);
            throw new Error('新建api失败');
        }

        let record = await Req.findOne({
            where: {
                req_name: {
                    [Op.eq]: obj.req_name
                },
                proj_id: {
                    [Op.eq]: obj.proj_id
                }
            }
        });

        if (record) {
            logger.error(`尝试创建重名api，api名称(${obj.proj_name})`);
            throw new Error('和已有api重名');
        }

        let voProj = Req.build({
            req_id: uuidv4(),
            req_name: obj.req_name,
            desci: obj.desci,
            req_url: obj.req_url,
            req_method: obj.req_method,
            header: obj.header,
            header_statusmap: obj.header_statusmap,
            params: obj.params,
            formdata: obj.formdata,
            proj_id: obj.proj_id,
            create_time: new Date(),
            modify_time: new Date()
        });
        await voProj.save();
        logger.info(`创建api(${obj.req_name})成功`)
    }

    async updateRequest(obj) {
        let result = Joi.validate(obj, update_req_schema);
        if (result.error) {
            console.log(result.error);
            throw new Error('更新api失败');
        }

        let record = await Req.findOne({
            where: {
                req_id: {
                    [Op.eq]: obj.req_id
                },
                proj_id: {
                    [Op.eq]: obj.proj_id
                }
            }
        });

        if (!record) {
            logger.error(`不存在api`);
            throw new Error('更新api失败');
        }

        record = Object.assign(record, obj);
        
        await record.save();
        logger.info(`更新api(${obj.req_name})成功`)
    }

    async deleteRequest(req_id, proj_id) {
        // 删除指定api请求
    }

    async getReqList(proj_id) {
        
    }
}