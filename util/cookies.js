import { count } from 'console';
import { cookies } from 'next/headers';

export async function getCookie(name) {
  const allCookies = await cookies();
  // console.log('All cookies:', allCookies);

  const cookie = (await cookies()).get(name);

  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}
