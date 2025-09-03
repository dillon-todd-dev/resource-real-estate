import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { GalleryVerticalEnd } from 'lucide-react';
import Link from 'next/link';

export default function Login() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='flex flex-col gap-4 p-6 md:p-10'>
        <div className='flex justify-center gap-2 md:justify-start'>
          <Link href='/' className='flex items-center gap-2 font-medium'>
            <div className='bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md'>
              <GalleryVerticalEnd className='size-4' />
            </div>
            Resource Real Estate
          </Link>
        </div>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full max-w-xs'>
            <form className='flex flex-col gap-6'>
              <div className='flex flex-col items-center gap-2 text-center'>
                <h1 className='text-2xl font-bold'>Login to your account</h1>
                <p className='text-muted-foreground text-sm text-balance'>
                  Enter your email below to login to your account
                </p>
              </div>
              <div className='grid gap-6'>
                <div className='grid gap-3'>
                  <Label htmlFor='email'>Email</Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='m@example.com'
                    required
                  />
                </div>
                <div className='grid gap-3'>
                  <div className='flex items-center'>
                    <Label htmlFor='password'>Password</Label>
                  </div>
                  <Input id='password' type='password' required />
                </div>
                <Button type='submit' className='w-full'>
                  Login
                </Button>
              </div>
              <div className='text-center text-sm'>
                <a
                  href='#'
                  className='ml-auto text-sm underline-offset-4 hover:underline'
                >
                  Forgot your password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className='bg-muted hidden lg:flex lg:items-center lg:justify-center lg:flex-col lg:gap-4'>
        <h1 className='text-2xl font-bold'>Need to setup an account?</h1>
        <Button variant='ghost' size='lg' className='h-10 font-bold'>
          Sign Up
        </Button>
      </div>
    </div>
  );
}
