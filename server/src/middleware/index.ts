import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const notFound = (req: Request, res: Response, next:NextFunction) => {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
};

export const errorHandler: ErrorRequestHandler = (err,req,res,next) => {
  res.status(res.statusCode || 500);
  res.json({
    status: res.statusCode,
    message: err.message,
    stack: err.stack
  })
};