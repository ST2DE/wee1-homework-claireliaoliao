const express = require('express');
const app = express(); //建立一個Express伺服器

app.set('view engine', 'ejs');

app.listen(3000); //告訴server聽取3000這個Port


app.get('/about_me', function(req, res) {
    res.render('about_me', { name: req.query.name });
});