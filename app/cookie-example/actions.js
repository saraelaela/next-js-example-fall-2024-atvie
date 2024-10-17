'use server';

import { cookies } from 'next/headers';

export async function createCookie(cookieName, cookieValue) {
  (await cookies()).set(cookieName, cookieValue);
}

// to Do: cookieName should hold the amount of the Items added to the cart
