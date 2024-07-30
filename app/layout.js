import Head from 'next/head';

export const metadata = {
  title: 'Crwn Tech',
  description: '"Solusi Teknologi Inovatif untuk Masa Depan Digital Anda | Crwn Tech"',
};

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/crown.svg' />
      </head>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
      </Head>
      <body>{children}</body>
    </html>
  );
}
