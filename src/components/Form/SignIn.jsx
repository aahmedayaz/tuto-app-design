import React, { useState } from 'react';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className='mt-6'>
      <div className='mb-2'>
        <input
          type='email'
          className='w-full p-2 rounded-md border focus:outline-none focus:border-blue-500'
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mb-6'>
        <input
          type='password'
          className='w-full p-2 rounded-md border focus:outline-none focus:border-blue-500'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        className='w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 mb-[20px]'
        onClick={handleSubmit}
      >
        Sign In
      </button>
    </div>
  );
};

export default SignIn;
