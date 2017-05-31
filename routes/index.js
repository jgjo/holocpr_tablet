var express = require('express');
var router = express.Router();

//WINSTON
var winston = require('winston');
//winston format
const tsFormat = () => (new Date()).toLocaleTimeString();
const logger = new (winston.Logger)({
  transports: [
    // colorize the output to the console
    new (winston.transports.Console)({
      timestamp: tsFormat,
      colorize: true,
    })
  ]
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CPRConduct' });
  logger.info('Start page loaded');
});

router.get('/task', function(req, res, next) {
  res.render('task', { title: 'CPRConduct' });
  logger.info('task page loaded');
});

router.get('/task1', function(req, res, next) {
  res.render('task1', { title: 'CPRConduct' });
  logger.info('task1 loaded');
});

router.get('/task2', function(req, res, next) {
  res.render('task2', { title: 'CPRConduct' });
  logger.info('task2 loaded');
});

router.get('/task3', function(req, res, next) {
  res.render('task3', { title: 'CPRConduct' });
  logger.info('task3 loaded');
});

module.exports = router;
