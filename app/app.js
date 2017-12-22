const Koa = require('koa');
const projRoute = require('./routes/project');


const app = new Koa();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// app.use(ctx => {
//     ctx.body = 'Hello Koa';
// });

app.use(projRoute.middleware())

app.listen(3000);