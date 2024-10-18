'use server';

import { cookies } from 'next/headers';
import CookieValue from './CookieValue';
import SetCookieForm from './SetCookieForm';

// We use Next.js Cookies from next/headers because of server side cookies (HTTP)

export default async function SetCookiePage() {
  const testCookie = (await cookies()).get(CookieValue);

  return (
    <>
      <div>Cookie Value: {testCookie?.value}</div>

      <CookieValue />
      <SetCookieForm />
    </>
  );
}
