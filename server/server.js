const express = require('express');
const app = express();
app.get('/',function (req,res) {
    res.send('<h1>124</h1>');
});
app.get('/data',function (req,res) {
    res.json({name:'imooc data 12',user:'xiaoming',type:'IT'});
});
app.listen(9093,function () {
    console.log("hello word");
});