let express=require('express')
let router=express.Router()

let newlist=require('../mysql/mysql')

let urldata='http://localhost:3002/'


router.get('/app',function (req,res) {

    res.render('index.html')

})

router.get('/lunbo',function (req,res) {
    res.json({
        "statick":0,
        "mesage":[
            {
                "img":urldata+'public/img/lb1.jpg'
            },
            {
                "img":urldata+'public/img/lb2.jpg'
            }
       ,{
                "img":urldata+'public/img/lb3.jpg'
            }]
    })
})

router.get('/list',function (req,res) {
    let sql='SELECT * FROM newlist'
    newlist.query(sql,function (err,ret) {
        if (err){
            console.log(err)
            return
        }
        // console.log(ret)
        res.json(ret)
    })

})

router.get('/newva',function (req,res) {
    let id=req.query
    id=id[0]
    console.log(id)
    sql="SELECT * FROM newlist WHERE id=?"

    newlist.query(sql,id,function (err,ret) {
        if (err){
            console.log(err)
            return
        }
        // console.log(ret)
        res.json(ret)
    })
})


















module.exports=router
