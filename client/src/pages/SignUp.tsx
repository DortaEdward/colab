import { createRef } from 'react';
import { Link } from 'react-router-dom';

type Props = {}

type FormData = {
  email: string,
  password: string
}

const SignUp = () => {

  const handleSubmit = (e: {preventDefault: () => void}) => {
    e.preventDefault();
    const payload = {
      // @ts-ignore
      email: emailRef.current.value as string,
      // @ts-ignore
      password: passwordRef.current.value as string,
    }
    console.log(payload)
  }

  const emailRef = createRef<HTMLInputElement>();
  const passwordRef = createRef<HTMLInputElement>();

  return (
    <div className='w-full h-full flex items-center justify-center'>
      <div className='bg-[#fefefe] w-[600px] h-[650px] flex flex-col items-center gap-4 justify-center rounded-lg'>
        <h1 className='text-3xl font-bold'>Welcome back</h1>
        <p className='text-gray-500'>Welcome back! Please enter your details.</p>
        {/* <div className='bg-red-500 text-gray-50 px-4 py-1'>Invalid Email</div> */}
        <form
          className='flex flex-col gap-4'
          onSubmit={handleSubmit}>
          <div className='flex flex-col gap-2'>
            <label>Display Name</label>
            <input
              type="text"
              placeholder='Enter a Display name'
              className='p-2 border rounded border-gray-400'
              ref={emailRef}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Email</label>
            <input
              type="email"
              placeholder='Enter your email'
              className='p-2 border rounded border-gray-400'
              ref={emailRef}
            />
          </div>
          <div className='flex flex-col gap-2'>
            <label>Password</label>
            <input
              type="password"
              placeholder='Enter your password'
              minLength={8}
              className='p-2 border w-80 rounded border-gray-400'
              ref={passwordRef}
            />
          </div>
          <button
            type='submit'
            className='bg-blue-600 text-gray-50 font-semibold py-2 rounded cursor-pointer'>
            Sign Up
          </button>
          <p className='text-center'>Have an account? <Link to='/' className='text-blue-600 font-semibold underline cursor-pointer'>Sign In</Link></p>
        </form>
      </div>
    </div>
  )
}

export default SignUp;