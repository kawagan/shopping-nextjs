'use client';

import { Button, TextField } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const CredentialsSignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        setError('Invalid email or password');
      } else if (result?.ok) {
        router.push('/');
      }
    } catch (error) {
      console.error('Sign in error:', error);
      setError('An error occurred during sign in');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="p-2 rounded text-sm bg-red-100 text-red-700 border border-red-300">
          {error}
        </div>
      )}
      <div>
        <TextField
          name="email"
          id="email"
          label="Email"
          type="email"
          fullWidth
          required
          variant="outlined"
        />
      </div>
      <div>
        <TextField
          name="password"
          id="password"
          label="Password"
          type="password"
          fullWidth
          required
          variant="outlined"
        />
      </div>
      <Button
        type="submit"
        variant="contained"
        fullWidth
        className="mt-4"
        disabled={isLoading}
      >
        {isLoading ? 'Signing In...' : 'Sign In'}
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
