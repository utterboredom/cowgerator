const express = require('express');
const app = new express();

app.use(express.static('public'))

app.listen(3001,function(){
    console.log('listening on 3001')
});