/**
 * Created by Administrator on 2019/8/8.
 */
let express=require('express')//引入express
let app=express()
let bodyParser=require('body-parser')



//引入路由
let news=require('./routers/new')
let photo=require('./routers/photo')
// let user=require('./routers/user')

app.use('/public',express.static('./public')) //公开文件夹
app.use('/node_modules',express.static('./node_modules'))

app.engine('html',require('express-art-template')) //引入express-art-template模板引擎

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())




app.all('*', function(req, res, next) {   //设置跨域
    res.header("Access-Control-Allow-Origin", "*");
    // res.header("Access-Control-Allow-Headers", "X-Requested-With");
    // res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    // res.header("X-Powered-By",' 3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();

});

app.use('/app',news)
app.use('/photo',photo)
// app.use('/user',user)


app.listen(3002,function () {
    console.log('服务器运行,端口80')
})
