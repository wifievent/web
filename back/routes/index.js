const express = require('express');
const router = express.Router();
const path = require('path');

const nb = require('./nb');
const user = require('./user');
const cp = require('./cp');

const downloadLog = require('./admin/downloadLog');
const adminUser = require('./admin/user');

router.use('/images', express.static(path.resolve(__dirname, '..', 'uploads')))

router.use('/netblock', nb)
router.use('/user', user)
router.use('/cp', cp)

router.use('/admin/downloadLog', downloadLog)
router.use('/admin/user', adminUser)

module.exports = router;