const mysql=require('mysql')
let vueapp=mysql.createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'root',
    database:'vueapp',
})


module.exports=vueapp
