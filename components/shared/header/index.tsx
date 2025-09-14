'use client';

import { ShoppingCart, UserIcon } from 'lucide-react';
import logo from '@/public/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { APP_NAME } from '@/lib';
import ModeToggle from './mode-toggle';

const StyledButton = styled(Button)({
  textTransform: 'none',
});

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <Image
              src={logo}
              alt={`${APP_NAME} Logo`}
              width={40}
              height={40}
              priority={true}
            />
            <span className="hidden lg:block font-bold text-2xl ml-3">
              {APP_NAME}
            </span>
          </Link>
        </div>
        <div className="space-x-2">
          <ModeToggle />
          <Link href="/cart">
            <StyledButton variant="text" color="primary">
              <ShoppingCart size={16} className="mr-2" />
              Cart
            </StyledButton>
          </Link>
          <Link href="/login">
            <StyledButton variant="contained" color="primary">
              <UserIcon size={16} className="mr-2" />
              Sign In
            </StyledButton>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
