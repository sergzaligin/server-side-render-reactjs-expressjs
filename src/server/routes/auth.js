import express from 'express';
var router = express.Router();

const controller = require('../controllers/auth');

/* GET users listing. */
router.post('/registration', controller.registration);
router.post('/login', controller.login);

export default router;
