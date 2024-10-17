import Image from 'next/image';
import Link from 'next/link';
import { getItemsInsecure } from '../../database/items';
import { getCookie } from '../../util/cookies';
import { parseJson } from '../../util/json';
import styles from './ItemsOverview.module.scss';

export default async function Items() {
  const itemCommentsCookie = await getCookie('itemsComments');

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }
  const items = await getItemsInsecure();

  return (
    <div className={styles.root}>
      <h1 className={styles.itemHeadline}>Our Products</h1>
      {items.map((item) => {
        console.log(item.name);
        const imageName = item.name.split(' ').join('-');
        console.log('imageName:', imageName);
        return (
          <div
            key={`items-${item.id}`}
            data-test-id={`item-type-${item.type}`}
            className={styles.itemWrapper}
          >
            <div className={styles.itemContainer}>
              <Link href={`/items/${item.id}`}>
                <div className={styles.itemName}>{item.name}</div>
                <div className={styles.imageWrapper}>
                  <Image
                    className={styles.itemImage}
                    // src={`/images/Glass-Coffee-Table.webp`}
                    src={`/images/${imageName}.webp`}
                    alt={imageName}
                    width={1000}
                    height={1000}
                  />
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
