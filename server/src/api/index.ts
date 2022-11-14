import { Router } from 'express';
import { validate } from '../validate';
import UserController from './users/';
const router = Router();


router.get('/', (req,res,next) => {
  res.send('From api route');
});

router.use('/user', UserController);

export default router;