import { count } from 'console';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getItem } from '../../../database/items';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import SetCookieForm from '../../cookie-example/SetCookieForm';
import CookieCart from '../../CookieCart';
import ItemCommentForm from './ItemCommentForm';

export default async function SingleItemPage(props) {
  const item = getItem(Number((await props.params).itemId));

  const itemCommentsCookie = await getCookie('itemsComments', count);

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!item) {
    return notFound();
  }

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }

  const itemCommentToDisplay = itemComments.find((itemComment) => {
    return itemComment.id === item.id;
  });

  return (
    <>
      <Image
        src={`/images/${item.name.toLowerCase()}.webp`}
        alt={`A picture of ${item.name}`}
        width={200}
        height={200}
      />
      <h1>{item.name}</h1>
      {/* Optional Chaining, means if itemCommentToDisplay === undefined, return undefined, else displays itemCommentToDisplay.comment */}
      {/* <div>{itemCommentToDisplay?.count}</div> */}
      <p>Item Description:{item.productDescription}</p>
      {/* <ItemCommentForm itemId={item.id} /> */}
      <SetCookieForm />
      {/* <CookieStorage /> */}
    </>
  );
}
