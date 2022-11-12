import { Router } from 'express';

const router = Router();


router.get('/', (req,res,next) => {
  res.send('From api route');
});

// router.use('/food',foodRoute);

export default router;