import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { subscribe } from '@/app/actions/email';
import { useActionState } from 'react';

type DialogProps = {
  showDialog: boolean;
  setShowDialog: (show: boolean) => void;
};

export default function NewsletterDialog({
  showDialog,
  setShowDialog,
}: DialogProps) {
  const [message, formAction, isPending] = useActionState(subscribe, null);
  return (
    <Dialog open={showDialog} onOpenChange={setShowDialog}>
      <DialogContent>
        <form action={formAction}>
          <DialogHeader>
            <DialogTitle className='text-center'>Stay Updated</DialogTitle>
          </DialogHeader>
          <div className='grid gap-4'>
            <p>
              We have a few off market deals available for investors but don’t
              have links to them. We have email blasts that you can sign up for.
              If you want to stay updated about off market deals, please enter
              your email.
            </p>
            <Input name='email' type='email' placeholder='Enter your email' />
          </div>
          <DialogFooter>
            <Button className='justify-start' variant='secondary' type='submit'>
              Submit
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
