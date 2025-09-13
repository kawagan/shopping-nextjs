import { ShoppingCart, UserIcon } from 'lucide-react';
import logo from '@/public/images/logo.svg';
import Link from 'next/link';
import Image from 'next/image';
import { APP_NAME } from '@/lib';

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
            <span className="block lg:hidden font-bold ml-3 text-blue-500">
              {APP_NAME} ffff
            </span>
          </Link>
        </div>
        <div className="space-x-2"></div>
      </div>
    </header>
  );
};

export default Header;
