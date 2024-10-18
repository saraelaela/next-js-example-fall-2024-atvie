import { cookies } from 'next/headers';

export async function getCookie(name) {
  // const allCookies = await cookies();
  // console.log('expose All cookies:', allCookies);

  // to do: all cookies have a value, add it up and display it on cart

  // const test = Object.values(allCookies);
  // console.log('all test', test);

  const cookie = (await cookies()).get(name);

  if (!cookie) {
    return undefined;
  }
  return cookie.value, allCookies;
}

export async function getAllCookies() {
  const allCookies = await cookies();
  console.log('Expose All cookies:', allCookies);
  return allCookies;
}
