import Image from 'next/image';
import Link from 'next/link';

interface NavbarProps {}

function Navbar({}: NavbarProps) {
  return (
    <nav className='fixed top-0 flex-center z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white'>
      <div className='flex-between mx-auto max-w-screen-2xl w-full px-6 xs:px-8 sm:px-16'>
        {/* Logo */}
        <Link href='/'>
          <Image src={'/jsm-logo.svg'} alt='logo' width={55} height={40} />
        </Link>
        {/* Hamburger Menu Icon */}
        <Image
          src='hamburger-menu.svg'
          width={30}
          height={30}
          alt='hamburger menu'
          className='block md:hidden'
        />
        {/* Links */}
        <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
          <li className='body-text text-gradient_blue-purple !font-bold'>
            <Link href='/' target='_blank'>
              Next.js 13.4 Course
            </Link>
          </li>
          <li className='body-text !font-normal'>
            <Link href='/' target='_blank'>
              Masterclass
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
