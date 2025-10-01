import { APP_NAME } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo.svg';
import CredentialsSignInForm from './credentials-signin-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

const SignInPage = async () => {
  // in this way we get the session on server side
  // and if the user is already logged in
  // we redirect him to the home page
  const session = await auth();
  if (session) {
    return redirect('/');
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="p-6">
          <Link href="/" className="flex-center mb-6">
            <Image
              src={logo}
              alt={`${APP_NAME} logo`}
              width={100}
              height={100}
              priority={true}
            />
          </Link>
          <div className="space-y-4">
            <div className="text-center space-y-2">
              <h1 className="text-2xl font-bold">Sign In</h1>
              <div className="mt-4">
                <CredentialsSignInForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
