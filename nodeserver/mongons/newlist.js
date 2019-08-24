let mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/newlist',{useNewUrlParser:true})

let newSheam=new mongoose.Schema({
    img:{
        type:String,
        required:true,
        default:'http://116.62.108.19/public/img/avatar.png'
    },
    titles:{
        type:String,
        required:true,
        default:'这是标题'
    },
    dateS:{
        type:Date,
        default:Date.now
    },
    file:{
        type:String,
        required:true,
        default:'这是内容'
    }

})
// let News=mongoose.model('New',newSheam)
// let news2=new News({
//     titles:'这是第三个标题',
//     file:'这是第三个内容'
// })
// news2.save(function (err,ret) {
//     if (err){
//         console.log(err)
//     }
//     console.log(ret)
// })
// function update() {
//     var where={'img':'http://localhost:3001/public/img/avatar.png'}
//     var updatestr={'img':'http://localhost:3002/public/img/avatar.png'}
//     News.update(where,updatestr,function (err,ret) {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(ret);
//         }
//     })}
//
//
// update()
// News.update({
//     img:'http://localhost:3001/public/img/avatar.png'
// },function (err,ret) {
//     if(err){
//         console.log('查询失败')
//     }else {
//         console.log(ret)
//     }
// })
//
// News.find(function (err,ret) {
//     if(err){
//         console.log('查询失败')
//     }else {
//         console.log('查询成功'+ret)
//     }
// })

module.exports=mongoose.model('New',newSheam)