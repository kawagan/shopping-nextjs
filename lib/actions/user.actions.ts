'use server';

import { signinSchema } from '@/db/validaors';

// signin the user with credentials
export async function signinWithCredentials(
  previousState: unknown,
  FormData: FormData
) {
  try {
    const user = signinSchema.parse({
      email: FormData.get('email') as string,
      password: FormData.get('password') as string,
    });

    // Return the parsed data for client-side NextAuth signIn
    return {
      success: true,
      message: 'Validation successful',
      email: user.email,
      password: user.password,
    };
  } catch (error) {
    console.error('Validation error:', error);
    return { success: false, message: 'Invalid email or password format' };
  }
}

import { redirect } from 'next/navigation';

// signout the user
export async function signout() {
  redirect('/api/auth/signout');
}
