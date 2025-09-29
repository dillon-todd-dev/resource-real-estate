import Footer from '@/components/Footer';
import PublicNavbar from '@/components/public-navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='min-h-screen'>
      <PublicNavbar />
      {children}
      <Footer />
    </div>
  );
}
