import type { Metadata } from 'next';

export const metadate : Metadata = { 
  title: 'Nockslock - Home',
  description: 'Secure your digital assets with Nockslock, the ultimate cold storage solution for cryptocurrencies.',
}

export default function RootLayout({ 
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}