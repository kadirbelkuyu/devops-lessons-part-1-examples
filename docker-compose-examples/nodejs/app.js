const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Merhaba Docker ve Node.js');
    });

app.listen(port, () => {
    console.log(`Uygulama ${port} portunda çalışıyor.`);
    });