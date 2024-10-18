import Image from 'next/image';
import Link from 'next/link';
import { getItemsInsecure } from '../../database/items';
import { getAllCookies, getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function Items(props) {
  const items = await getItemsInsecure();
  console.log('test', items);

  const itemCommentsCookie = await getCookie('itemsComments');
  const allCookies = await getAllCookies();
  console.log('is an object:', allCookies);

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }

  // const cookieValue = allCookies.map((cookie) => cookie.value);
  // console.log('cookieValue', cookieValue);

  return (
    <>
      <h1>Cart overview</h1>
      <h3>Items in your Cart</h3>

      {allCookies.getAll().map((cookie) => (
        <div key={`cookie-${cookie.id}`}>
          <Image
            src={`/images/${cookie.name}.webp`}
            alt={cookie.name}
            width={200}
            height={200}
          />
          <p>Item: {cookie.name}</p>
          <p>Amount: {cookie.value}</p>
        </div>
      ))}
      <div>total:</div>

      <Link href="/checkout">
        <button>go to checkout</button>
      </Link>
    </>
  );
}
