import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <div className='max-w-3xl mx-auto text-center space-y-10 py-20'>
        <h1 className='text-6xl font-bold'>
          A marketplace built for real estate investors
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
          Fuel your growth with the largest private source of value-add
          properties, ready to rehab.
        </p>
        <Button className='h-10 hover:bg-black font-bold'>Book Online</Button>
      </div>
      <div className='bg-gray-100'>
        <div className='max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center gap-10 py-20'>
          <Card>
            <CardHeader className='text-center border-b-1'>
              <CardTitle className='text-2xl font-bold'>Buyers</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6 md:space-x-6'>
              <div>
                <h1 className='font-bold text-md'>Fix-and-Flip Investors</h1>
                <p>
                  Looking to buy their first or 100th home to rehab, flip fo
                  profit, and build a thriving business.
                </p>
              </div>
              <div>
                <h1 className='font-bold text-md'>Landlords</h1>
                <p>
                  Seeking rental properties to rehab and hold, building
                  long-term wealth and expanding their rental portfolio.
                </p>
              </div>
              <Button className='w-40'>Buy</Button>
            </CardContent>
          </Card>
          <Card className='max-w-xl'>
            <CardHeader className='text-center border-b-1'>
              <CardTitle className='text-2xl font-bold'>Sellers</CardTitle>
            </CardHeader>
            <CardContent className='space-y-6 md:space-x-6'>
              <div>
                <h1 className='font-bold text-md'>Fix-and-Flip Investors</h1>
                <p>
                  Looking to buy their first or 100th home to rehab, flip fo
                  profit, and build a thriving business.
                </p>
              </div>
              <div>
                <h1 className='font-bold text-md'>Landlords</h1>
                <p>
                  Seeking rental properties to rehab and hold, building
                  long-term wealth and expanding their rental portfolio.
                </p>
              </div>
              <Button className='w-40'>Sell</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
