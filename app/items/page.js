import Image from 'next/image';
import Link from 'next/link';
import { getItemsInsecure } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';

export default async function Items() {
  const itemCommentsCookie = await getCookie('itemsComments');

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }
  const items = await getItemsInsecure();
  console.log('test', items);

  return (
    <>
      <h1>Items Page</h1>
      {items.map((item) => {
        console.log(item.name);
        const imageName = item.name.split(' ').join('-');
        console.log('imageName:', imageName);
        return (
          <div key={`items-${item.id}`} data-test-id={`item-type-${item.type}`}>
            <Link href={`/items/${item.id}`}>
              <div>{item.name}</div>
              <Image
                // src={`/images/Glass-Coffee-Table.webp`}
                src={`/images/${imageName}.webp`}
                alt={imageName}
                width={200}
                height={200}
              />
            </Link>
          </div>
        );
      })}
      {/* {items.map((item) => {
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
      })} */}
    </>
  );
}
