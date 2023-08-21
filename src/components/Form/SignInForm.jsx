import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='mt-6 flex flex-col'>
      <div className='mb-2'>
        <input
          type='email'
          className='w-full p-2 rounded-md border focus:outline-none'
          placeholder='Email/ Username'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-6'>
        <input
          type='password'
          className='w-full p-2 rounded-md border focus:outline-none'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <Link className='text-[#034BD9] self-end mt-[-20px] mb-[20px] cursor-pointer' to={``} >Forget Password ?</Link>
      <button
        className='w-full bg-[#034BD9] text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 mb-[20px]'
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignInForm;
