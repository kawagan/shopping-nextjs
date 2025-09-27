'use server';

import { signinSchema } from '@/db/validaors';
import { signIn, signOut } from 'next-auth/react';
import { isRedirectError } from 'next/dist/client/components/redirect-error';

// signin the user with credentials
export async function signinWithCredentials(
  previousState: unknown,
  FormDataata: FormData
) {
  try {
    const user = signinSchema.parse({
      email: FormDataata.get('email') as string,
      password: FormDataata.get('password') as string,
    });
    await signIn('credentials', user);
    return { success: true, message: 'Signed in successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: 'Invalid email or password' };
  }
}

// signout the user
export async function signout() {
  try {
    await signOut({ callbackUrl: '/' });
    return { success: true, message: 'Signed out successfully' };
  } catch (error) {
    if (isRedirectError(error)) {
      throw error;
    }
    return { success: false, message: 'Error signing out' };
  }
}
