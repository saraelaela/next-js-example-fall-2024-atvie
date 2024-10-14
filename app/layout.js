import './globals.scss';
import localFont from 'next/font/local';
import Link from 'next/link';
import CookieValue from './cookie-example/CookieValue';
import CookieCart from './CookieCart';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata = {
  title: {
    default: 'Home | UpLeveled',
    template: '%s | UpLeveled',
  },

  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <div>
            <nav>
              {/* This is not optimized */}
              {/* <a href="/about">About</a> */}

              {/* This is optimized */}
              <Link href="/">Home</Link>
              {/* <Link href="/animals">Animals</Link> */}
              {/* <Link href="/fruits">Fruits</Link> */}
              <Link href="/about">About</Link>
              <Link href="/items">Items</Link>
              <Link href="/cart">
                {' '}
                Cart
                <CookieValue />
              </Link>
              <Link href="/cookie-example">Cookies </Link>
            </nav>
            {/* {Math.floor(Math.random() * 10)} */}
          </div>
        </header>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
