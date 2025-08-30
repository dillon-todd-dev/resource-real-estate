import PublicNavbar from '@/components/public-navbar';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <PublicNavbar />
      {children}
    </div>
  );
}
