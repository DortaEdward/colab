import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export type User = {
  id: number,
  displayName: string,
  imageUrl?: string
}

const secret = process.env.JWT_SECRET as string;

// create jsonwebtoken
export const createJWT = (payload: User, res: Response) => {
  const token = jwt.sign(payload,secret as string,{
    expiresIn:'1d'
  }, (err,token) => {
    if(err) throw  new Error(err.message);
    res.json({
      status:200,
      token: token
    })
  })
}

// validate jsonwebtoken

export const validateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.get('authorization');
  if(!authHeader) return next();
  const token = authHeader?.split(' ')[1] as string;
  if(!token) return next();
  jwt.verify(token, secret, (error,user) => {
    if(error) throw new Error(error.message);
    // @ts-ignore
    req.user = user;
    // @ts-ignore
    return next();
  })
}