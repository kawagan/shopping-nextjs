'use client';

import { APP_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';
import CredentialsSignInForm from './credentials-signin-form';

const SignInPage = () => {
  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <Link href="/" className="flex-center">
          <Image
            src={logo}
            alt={`${APP_NAME} logo`}
            width={100}
            height={100}
            priority={true}
          />
        </Link>
        <CardContent className="space-y-4">
          <div className="text-center space-y-2">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <div className="mt-4">
              <CredentialsSignInForm />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
