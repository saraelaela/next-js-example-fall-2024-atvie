'use server';

import { cookies } from 'next/headers';
import SetCookieForm from './SetCookieForm';

// We use Next.js Cookies from next/headers because of server side cookies (HTTP)

export default async function CookieValue() {
  const testCookie = (await cookies()).get('testCookie');

  return (
    <>
      <div> ({testCookie?.value})</div>
    </>
  );
}
