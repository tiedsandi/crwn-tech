import {Open_Sans, Roboto_Condensed} from 'next/font/google';

const openSans = Open_Sans({subsets: ['latin'], variable: '--font-heading'});
const robotoCondensed = Roboto_Condensed({subsets: ['latin'], variable: '--font-body'});

export const metadata = {
  title: 'Crwn Tech',
  description: '"Solusi Teknologi Inovatif untuk Masa Depan Digital Anda | Crwn Tech"',
};

export default function RootLayout({children}) {
  return (
    <html lang='en' className={`${openSans.variable} ${robotoCondensed.variable}`}>
      <head>
        <link rel='icon' href='/crown.svg' />
      </head>
      <body>{children}</body>
    </html>
  );
}
