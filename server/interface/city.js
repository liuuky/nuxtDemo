// import Router from 'koa-router'
const Router = require('koa-router')

const router = new Router({
  prefix: '/city'
})

// eslint-disable-next-line require-await
router.get('/list', async (ctx) => {
  ctx.body = {
    list: ['北京', '天津']
  }
})

// ES6写法
// export default router

// CommonJS写法
module.exports = router
