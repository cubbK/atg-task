const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const axios = require('axios')

const app = new Koa()
const router = new Router()

router.get('/games/:id', async (ctx, next) => {
    const request = await axios.get(
        'https://www.atg.se/services/racinginfo/v1/api/games/' + ctx.params.id
    )
    ctx.body = request.data
})
router.get('/products/:id', async (ctx, next) => {
    const request = await axios.get(
        'https://www.atg.se/services/racinginfo/v1/api/products/' +
            ctx.params.id
    )
    ctx.body = request.data
})

app.use(cors())
app.use(router.routes())
app.use(router.allowedMethods())

console.log('server running')
app.listen(3001)
