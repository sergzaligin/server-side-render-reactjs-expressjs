import express from 'express';
var router = express.Router();

//const passport = require('passport');

import { list, getOne } from '../controllers/article';

router.get('/list', list);
router.get('/:id', getOne);
// router.get('/:id', passport.authenticate('jwt', { session: false}), getOne);
export default router;
