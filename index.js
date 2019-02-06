const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', (req, res) =>{
    res.send('Oof!');
});


const port = process.env.PORT || 7000;
app.listen(port);
console.log('listening on port '+[port]);