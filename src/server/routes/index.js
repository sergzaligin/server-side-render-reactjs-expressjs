import express from 'express';
const router = express.Router();

import passport from 'passport';

/* GET home page. */
router.get('/', passport.authenticate('jwt', { session: false}), function(req, res, next) {
  res.render('index', { title: 'Express' });
});

export default router;
