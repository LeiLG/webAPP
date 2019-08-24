let express=require('express')
let router=express.Router()
let photo=require('../mysql/mysql')

router.get('/ps',function (req,res) {
    let types=req.query
    types=types[0]
    if(types==='qb'){
        let sql='SELECT * FROM photo'
        photo.query(sql,function (err,ret) {
            if (err){
                console.log(err)
                return
            }
            // console.log(ret)
            res.json(ret)
        })
            return
    }else if(types==='jz'){
        let ty='建筑'
        let sql='SELECT * FROM photo WHERE types=?'
        photo.query(sql,ty,function (err,ret) {
            if (err){
                console.log(err)
                return
            }
            // console.log(ret)
            res.json(ret)
        })
        return
    }else if(types==='dm'){
        let ty='动漫'
        let sql='SELECT * FROM photo WHERE types=?'
        photo.query(sql,ty,function (err,ret) {
            if (err){
                console.log(err)
                return
            }
            // console.log(ret)
            res.json(ret)
        })
        return
    }else if(types==='gf'){
        let ty='古风'
        let sql='SELECT * FROM photo WHERE types=?'
        photo.query(sql,ty,function (err,ret) {
            if (err){
                console.log(err)
                return
            }
            // console.log(ret)
            res.json(ret)
        })
        return
    }

    let sql='SELECT * FROM photo'
    photo.query(sql,function (err,ret) {
        if (err){
            console.log(err)
            return
        }
        // console.log(ret)
        res.json(ret)
    })
})

router.get('/phopl',function (req,res) {

})
router.post('/phopl',function (req,res) {
        let pl=req.body
        console.log(pl.id)
})

module.exports=router
