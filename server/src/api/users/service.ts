import prisma from '../../db';
import { SignUpSchema, SignInSchema } from './user.schema';
import { genSaltSync, hashSync, compareSync } from 'bcrypt';


export const signup = async (payload: SignUpSchema["body"]) => {
  try {
    const salt = genSaltSync(10)
    payload.password = hashSync(payload.password, salt);
    const newUser = await prisma.user.create({
      data: payload
    });
    console.log(newUser);
    return
  } catch (error: any) {
    if (error.message.includes('Unique')) {
      throw new Error('User exists with that email');
      console.log('Needs to be unique')
    } else console.log(error)
  }
};

export const signin = async (payload: SignInSchema["body"]) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: payload.email
      }
    });
    const validPassword = await compareSync(payload.password, user?.password as string);
    if (!validPassword) {
      throw new Error('Password does not match!')
    };
    console.log('user?', user);
    return;
  } catch (error: any) {
    console.log(error.message);
    throw new Error(error.message);
  }
}


