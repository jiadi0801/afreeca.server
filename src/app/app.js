const Koa = require('koa');

const app = new Koa();

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

app.use(ctx => {
    ctx.body = 'Hello Koa';
});
  
app.listen(3000);