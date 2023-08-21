import React, { useState } from 'react'

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <>
        <div className='mt-6 flex flex-col'>
        <div className='mb-2'>
            <input
            type='text'
            className='w-full p-2 rounded-md border focus:outline-none'
            placeholder='Full Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>

        <div className='mb-2'>
            <input
            type='number'
            className='w-full p-2 rounded-md border focus:outline-none'
            placeholder='Phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            />
        </div>

        <div className='mb-2'>
            <input
            type='email'
            className='w-full p-2 rounded-md border focus:outline-none'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>

        <div className='mb-2'>
            <input
            type='password'
            className='w-full p-2 rounded-md border focus:outline-none'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

        <button
            className='w-full bg-[#034BD9] text-white p-3 rounded-md hover:bg-blue-600 transition duration-300 mb-[20px]'
            onClick={handleSubmit}
        >
            Sign In
        </button>
        </div>
    </>
  );
}

export default SignUpForm