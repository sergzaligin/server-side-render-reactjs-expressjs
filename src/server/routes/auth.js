import express from 'express';
var router = express.Router();

import { registration, login } from '../controllers/auth';

/* GET users listing. */
router.post('/registration', registration);
router.post('/login', login);

export default router;
