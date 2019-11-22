import express from 'express';
var router = express.Router();

import FakerCreateController from '../controllers/faker-create';

router.get('/faker-create', FakerCreateController.create);

export default router;
