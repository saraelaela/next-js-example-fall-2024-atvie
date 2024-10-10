import Image from 'next/image';
import Link from 'next/link';
import { items } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function Items() {
  const itemCommentsCookie = await getCookie('itemsComments');

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }
  return (
    <>
      <h1>Items Page</h1>
      {items.map((item) => {
        const itemComment = itemComments.find(
          (itemObject) => item.id === itemObject.id,
        );
        return (
          <div key={`itemId-${item.id}`}>
            <Link href={`/items/${item.id}`}>
              <h2>
                {item.name} {item.icon}
              </h2>
              <Image
                src={`/images/${item.name.toLowerCase()}.webp`}
                alt={`A picture of ${item.name}`}
                width={200}
                height={200}
              />
            </Link>
            <div>{itemComment?.comment}</div>
          </div>
        );
      })}
    </>
  );
}
