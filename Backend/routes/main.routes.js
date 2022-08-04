'use strict';

// const router = require('express').Router();

module.exports = (router) => {
    require('./auth.routes')(router);
    require('./log.routes')(router);
    require('./applications.routes')(router);
};