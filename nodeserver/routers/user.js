let express=require('express')
let router =express.Router()
let User=require('../mysql/mysql')

router.get('/login',function (req,res) {
    let email=req.query.email
    let password=req.query.password
    // console.log(email)
    let sql='SELECT * FROM user WHERE email=?'
    User.query(sql,email,function (err,ret) {
        if(err){
            console.log(err)
            return
        }
        console.log(ret)
        if(ret[0]===undefined){
            res.json({
                steact:404,
                message:ret
            })
            return
        }
        //mysql返回的数据是一个数组，数组的第一个元素就是结果
        if(ret[0].password===password){
            res.json({
                steact:1,
                message:ret
            })
        }else{
            res.json({
                steact:303,
                message:ret
            })
        }

    })
})
router.post('/zhuche',function (req,res) {
    let email=req.body.email
    let username=req.body.username
    let password=req.body.password

    let sql2='SELECT * FROM user WHERE email=?'
    User.query(sql2,email,function (err,ret) {
        if(err){
            console.log(err)
        }

        if(ret[0]===undefined){
            let sql3='SELECT * FROM user WHERE username=?'
            User.query(sql3,username,function (err,ret) {
                if (err) {
                    console.log(err)
                }

                if (ret[0] === undefined) {

                    let sql = 'INSERT INTO user (username,password,email) VALUES (?,?,?)'

                    User.query(sql, [username, password, email], function (err, ret) {
                        if (err) {
                            console.log(err)
                        }
                        console.log(ret)
                        res.json({
                            sission:2,//成功
                            message:ret
                        })
                    })


                }else {
                    res.json({
                        sission:1,//用户名存在
                        message:[]
                    })
                }

            })

        }else {
            res.json({
                sission:0,//邮箱存在
                message:[]
            })
        }



    })

})









module.exports=router
