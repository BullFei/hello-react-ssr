import express from 'express';
import App from './App';
import React from 'react';
import { renderToString, renderToStaticMarkup} from 'react-dom/server';
import fs from 'fs';

var app = express();


app.get('/', (req, res)=> {
    const html = fs.readFileSync('./build/index.html');
    const content = renderToString(<App />);
    res.send(html.toString().replace('<div id="root"></div>', `<div id="root">${content}</div>`));
})

//公开build目录
app.use('/', express.static('build'))

app.listen(3005, function() {
    console.log('server started!!!');
})
