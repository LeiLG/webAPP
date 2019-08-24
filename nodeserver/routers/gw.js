let express=require('express')
let router=express.Router()
let Gw=require('../mysql/mysql')

router.get('/gwlist',function (req,res) {
    let sql='SELECT * FROM gw '
    Gw.query(sql,function (err,ret) {
        if(err){
            console.log(err)
            return
        }
        res.json(ret)
    })
})
router.get('/gwval',function (req,res) {
    let spids=req.query.spid
    let sql='SELECT * FROM gw,gwval WHERE gwval.spid=? AND gw.id=?'

    Gw.query(sql,[spids,spids],function (err,ret) {
        if(err){
            console.log(err)
            return
        }
        res.json(ret)
    })
})
router.post('/jrgwc',function (req,res) {
    let userid=req.body.userid
    let spid=req.body.spid

    let sql1='SELECT * FROM gwc WHERE userid=? AND spid=?'
    Gw.query(sql1,[userid,spid],function (err,ret) {
        if (err){
            console.log(err)
            return
        }
        if(ret[0]===undefined){
            let sql='INSERT INTO gwc (userid,spid) VALUES (?,?)'

            Gw.query(sql,[userid,spid],function (err,ret) {
                if(err){
                    console.log(err)
                    return
                }
                res.json({
                    setect:0
                })
            })
        }else {
            res.json({
                setect:1
            })
        }
    })












})
router.get('/gwc',function (req,res) {
    let userid=req.query[0]
    // console.log(userid)
    let sql='SELECT * FROM gwc WHERE userid=?'
    Gw.query(sql,userid,function (err,ret) {
        if(err){
            console.log(err)
            return
        }
        res.json(ret)
    })
})
router.get('/gwcval',function (req,res) {
    // console.log(req.query[0])
    let spid=req.query[0]
    let sql='SELECT * FROM gw WHERE id=?'
    Gw.query(sql,spid,function (err,ret) {
        if(err){
            console.log(err)
            return
        }
        res.json(ret)
    })

})
router.get('/sc',function (req,res) {
    let id=req.query[0]
    console.log(id)
    let sql='DELETE FROM gwc WHERE id=?'

    Gw.query(sql,id,function (err,ret) {
        if(err){
            console.log(err)
            return
        }
        res.json({
            sess:0
        })
    })
})

module.exports=router