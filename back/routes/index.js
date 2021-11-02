const express = require('express');
const router = express.Router();

const netblock = require('./netblock');
const feedback = require('./feedback');
const downloadLog = require('./admin/downloadLog');
const user = require('./user');
const adminUser = require('./admin/user');

router
    .use('/netblock', netblock)
    .use('/feedback', feedback)
    .use('/user', user)

    .use('/admin/downloadLog', downloadLog)
    .use('/admin/user', adminUser)

module.exports = router;