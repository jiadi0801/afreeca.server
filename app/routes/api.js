const ServiceFactory = require('../services/Factory');
const logger = require('../utils/logger');
const Router = require('koa-better-router');
const requestService = ServiceFactory.getServiceByName('requestService');

const router = Router({prefix: '/api'}).loadMethods();

/**
 * /api/new
 */
router.get('/new', async (ctx, next) => {
    try {
        await requestService.newRequest({
            req_name: '第一个api request部分',
            desci: '',
            req_url: '/mobile/annual2017/getPrizeList',
            req_method: 'get',
            header: '',
            params: 'id=1',
            formdata: '',
            proj_id: '9e855935-4d24-4aa9-a840-9c06c1333367',
        });
        
        // TODO new Response 原子性

        ctx.body = 'new api success';
    } catch (e) {
        ctx.body = e.message;
    }
});

router.get('/update', async (ctx, next) => {
    try {
        await requestService.updateRequest({
            req_id: 'ad8e8dca-e25c-47a1-8256-4d6831fa7a6a',
            req_name: '更新第一个api request部分',
            desci: '更新一波',
            req_url: '/mobile/annual2017/getPrizeList',
            req_method: 'get',
            header: '{"content-type": "application/json"}',
            header_statusmap: '{"content-type": "disabled"}',
            params: 'id=1',
            formdata: '',
            proj_id: '9e855935-4d24-4aa9-a840-9c06c1333367',
        });
        
        // TODO update Response 原子性

        ctx.body = 'update api success';
    } catch (e) {
        ctx.body = e.message;
    }
});

module.exports = router;