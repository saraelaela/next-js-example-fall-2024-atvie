import { cache } from 'react';
import { sql } from './connect';

type Item = {
  id: number;
  name: string;
  description: string | null;
  date: Date;
};

export const getItemsInsecure = cache(async () => {
  const items = await sql<Item[]>`
    SELECT
      *
    FROM
      items
  `;

  return items;
});

export const getItemInsecure = cache(async (id: number) => {
  const [item] = await sql<Item[]>`
    SELECT
      *
    FROM
      items
    WHERE
      id = ${id}
  `;
  return item;
});

export function getItemId(id: number) {
  return getItemsInsecure.find((item) => item.id === id);
}

export function getItem(id: number) {
  return items.find((item) => item.id === id);
}
