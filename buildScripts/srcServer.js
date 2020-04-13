// import express from 'express';
// import path from 'path';
// import open from 'open';
// import morgan from 'morgan';
// import chalk from 'chalk';
// import debug from 'debug';

const express = require('express');
const path = require('path');
const open = require('open');
const morgan = require('morgan');
const chalk = require('chalk');
//  const debug = require('debug')('app');

const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '../public')));
app.use('/images', express.static(path.join(__dirname, '../public/images')));
app.use('/js', express.static(path.join(__dirname, '../public/js')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/jquery/dist/')));
app.use('/js', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/js')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/font-awesome/css')));
app.use('/css', express.static(path.join(__dirname, '../public/css')));
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
    console.log(`app listening at http://localhost:${chalk.green(port)}`);
  }
});
