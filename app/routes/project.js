const ProjectService = require('../services/ProjectService');
const logger = require('../utils/logger');
const Router = require('koa-better-router');

const router = Router({prefix: '/project'}).loadMethods();

let projectService = new ProjectService();

router.get('/new', async (ctx, next) => {
    try {
        await projectService.addProject({
            username: 'jiadi0801',
            proj_name: '接口创建项目'
        });
        ctx.body = 'new success';
    } catch (e) {
        ctx.body = e.message;
    }
})

module.exports = router;