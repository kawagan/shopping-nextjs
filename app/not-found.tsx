'use client';
import { APP_NAME } from '@/lib/constants';
import { Button } from '@mui/material';
import Image from 'next/image';
const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="images/logo.svg"
        alt={`${APP_NAME}`}
        width={48}
        height={48}
        priority={true}
      />
      <h1 className="text-2xl font-bold mt-4">404 - Page Not Found</h1>
      <p className="mt-2 text-center">
        Oops! The page you are looking for does not exist.
      </p>
      <Button variant="contained" color="primary" href="/" sx={{ mt: 2 }}>
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
