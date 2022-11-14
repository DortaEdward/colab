import e, { Router, Request, Response, NextFunction, ErrorRequestHandler } from "express";
import { signin, signup } from './service';
import { SignUpSchema, SignInSchema } from "./user.schema";
const router = Router();

// Sign up 
router.post('/signup', async (
  req: Request<{},{},SignUpSchema["body"]>, 
  res: Response, 
  next: NextFunction) => {
    try {
      await signup(req.body);
      res.status(200).json({
        status: 200,
        message: "Sign Up Success"
      })
    } catch (error: any) {
      res.status(400).json({
        status: 400,
        error: error.message
      })
    }
})
// Sign in
router.post('/signin', async (
  req: Request<{},{},SignInSchema["body"]>, 
  res: Response, 
  next: NextFunction) => {
    try {
      await signin(req.body);
      res.status(200).json({
        status: 200,
        message: "Sign in Success"
      })
    } catch (error: any) {
      res.status(400).json({
        status: 400,
        error: error.message
      })
    }
})


export default router;