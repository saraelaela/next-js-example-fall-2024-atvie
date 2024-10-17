import { cookies } from 'next/headers';

export async function getCookie(name) {
  const allCookies = await cookies();
  console.log('expose All cookies:', allCookies);

  const test = Object.values(allCookies);
  console.log('all test', test);

  const cookie = (await cookies()).get(name);

  if (!cookie) {
    return undefined;
  }
  return cookie.value;
}
