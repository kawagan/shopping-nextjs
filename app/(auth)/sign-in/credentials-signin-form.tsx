'use client';

import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import Link from 'next/link';

const CredentialsSignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <TextField
          id="email"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          required
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          id="password"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          required
          variant="outlined"
        />
      </div>
      <Button type="submit" variant="contained" fullWidth className="mt-4">
        Sign In
      </Button>
      <div className="text-center text-sm text-gray-600 mt-4">
        Don&apos;t have an account?{' '}
        <Link
          href="/sign-up"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default CredentialsSignInForm;
