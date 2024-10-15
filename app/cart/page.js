import Image from 'next/image';
import Link from 'next/link';
import { getItemsInsecure } from '../../database/items';
// import { items } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function Items(props) {
  const items = await getItemsInsecure();
  console.log('test', items);

  const itemCommentsCookie = await getCookie('itemsComments');

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }
  return (
    <>
      <h1>Cart overview</h1>
      <h3>Items in your Cart</h3>
      {items.map((item) => {
        const imageName = item.name.split(' ').join('-');
        const itemComment = itemComments.find(
          (itemObject) => item.id === itemObject.id,
        );
        return (
          <div key={`items-${item.id}`}>
            <Link href={`/items/${item.id}`}>
              <h2>
                {item.name} {item.icon}
              </h2>
              <Image
                src={`/images/${imageName}.webp`}
                alt={`A picture of ${item.name}`}
                width={200}
                height={200}
              />
            </Link>
            <div>{itemComment?.comment}</div>
          </div>
        );
      })}
      <Link href="/checkout">
        <button>go to checkout</button>
      </Link>
    </>
  );
}
