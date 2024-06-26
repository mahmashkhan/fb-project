// index.js
const express = require('express');
const router = express.Router();
const signup = require('../controller/signup');
const login = require('../controller/login');
const feedpost = require('../controller/feedPost');
const upload = require('../controller/feedPost')

router.post('/signup', signup.signup);

router.post('/login', login.login);

router.post('/feed',upload.single('photo'),feedpost.feedPost);

module.exports = router;
