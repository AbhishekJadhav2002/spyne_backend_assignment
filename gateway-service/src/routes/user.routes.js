const express = require('express');
const authController = require('../controllers/auth.controller');
const userController = require('../controllers/user.controller');

const router = express.Router();

router.get('/:id', authController.authenticate, userController.getUser);
router.get('/search', authController.authenticate, userController.searchUser);

module.exports = router;
