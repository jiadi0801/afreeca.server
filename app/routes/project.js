const ServiceFactory = require('../services/Factory');
const logger = require('../utils/logger');
const Router = require('koa-better-router');
const projectService = ServiceFactory.getServiceByName('projectService');

const router = Router({prefix: '/project'}).loadMethods();

/**
 * /project/new
 */
router.get('/new', async (ctx, next) => {
    try {
        await projectService.addProject({
            username: 'jiadi0801',
            proj_name: '接口创建项目1'
        });
        ctx.body = 'new success';
    } catch (e) {
        ctx.body = e.message;
    }
});
/**
 * /project/update
 */
router.get('/update', async (ctx, next) => {
    try {
        await projectService.updateProject({
            proj_id: '9e855935-4d24-4aa9-a840-9c06c1333367',
            username: 'jiadi0801',
            proj_name: '接口更新项目',
            desci: '{"a":1}',
            status: 'normal'
        });
        ctx.body = 'update success';
    } catch (e) {
        ctx.body = e.message;
    }
});

module.exports = router;