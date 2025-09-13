import { APP_NAME } from '@/lib';
const Footer = () => {
  const createdYear = new Date().getFullYear();
  return (
    <footer className="border-t">
      <div className="wrapper py-4">
        <p className="text-center text-sm">
          &copy; {createdYear} {APP_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
