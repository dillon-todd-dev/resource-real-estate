import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Projects', href: '/projects' },
  { name: 'Agents', href: '/agents' },
  { name: 'Contact', href: '/contact' },
];

export default function PublicNavbar() {
  return (
    <nav className='flex items-center justify-between py-4 px-6 h-20 border-b-2'>
      {/* Name + Nav Links */}
      <div className='flex justify-center items-center gap-6'>
        <Link href='/' className='text-2xl font-bold text-blue-600'>
          Resource Real Estate
        </Link>
        <div className='hidden md:flex space-x-6'>
          {navLinks.map((link: NavLink) => (
            <Link
              key={link.name}
              href={link.href}
              className='text-gray-600 hover:text-gray-900 font-medium transition-colors'
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className='flex items-center gap-4'>
        <Button className='h-10 hover:bg-black font-bold' asChild>
          <Link href='/book-online'>Book Online</Link>
        </Button>
        <Button
          className='h-10 bg-gray-200 text-black font-bold hover:bg-gray-200'
          asChild
        >
          <Link href='/login'>Login</Link>
        </Button>
      </div>
    </nav>
  );
}
