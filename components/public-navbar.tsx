import Link from 'next/link';
import React from 'react';
import { Button } from '@/components/ui/button';

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: 'Home', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Agents', href: '/agents' },
  { name: 'Contact', href: '/contact' },
];

export default function PublicNavbar() {
  return (
    <nav className='flex items-center justify-between py-4 px-6 h-20 border-b-2'>
      {/* Name + Nav Links */}
      <div className='flex justify-center items-center gap-6'>
        <h1 className='text-2xl font-bold text-blue-600'>
          Resource Real Estate
        </h1>
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
        <Button className='h-10' asChild>
          <Link href='/book-online'>Book Online</Link>
        </Button>
        <Button variant='outline' className='h-10' asChild>
          <Link href='/login'>Login</Link>
        </Button>
      </div>
    </nav>
  );
}
