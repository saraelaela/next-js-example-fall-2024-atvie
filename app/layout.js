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

export default function RootLayout({
  children,
  hasBackground,
  backgroundContent, // New prop for dynamic background content
  backgroundClass = '',
  backgroundStyle = {},
  navClass = '', // Optional class for dynamic nav styling
  navStyle = {}, // Optional style object for dynamic nav styling
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <header>
          <div className="headElement">
            {hasBackground && (
              <div
                className={`backgroundContainer ${backgroundClass}`}
                style={backgroundStyle}
              >
                {/* Render dynamic content */}
                {backgroundContent}
              </div>
            )}
          </div>
        </header>
        <nav className={navClass} style={navStyle}>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/items">Items</Link>
          <Link href="/cart">
            cart
            <CookieValue />
          </Link>
        </nav>
        <main>{children}</main>
        <footer>Footer</footer>
      </body>
    </html>
  );
}
