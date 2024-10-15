import { count } from 'console';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import {
  getItemId,
  getItemInsecure,
  getItemsInsecure,
} from '../../../database/items';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import SetCookieForm from '../../cookie-example/SetCookieForm';

export default async function SingleItemPage(props) {
  const itemId = (await props.params).itemId;

  const items = await getItemInsecure(itemId);
  // const items = await getItemId(Number((await props.params).itemId));
  console.log('items: ', items);
  const itemCommentsCookie = await getCookie('itemsComments', count);

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!items) {
    return notFound();
  }

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }

  // const productId = items.map((item) => {
  //   return item.id;
  //   // return <div key={`item-${item.id}`}>{item.id}</div>;
  // });

  return (
    <>
      {/* {productId} */}
      {/* <div>{itemName}</div> */}
      {/* <div>
        {items.map((item) => {
          console.log('items Name test', item.id);
          return <div key={`item-${item.id}`}>{item.id}</div>;
        })}
      </div> */}

      {/* <Image
        src={`/images/${item.name}.webp`}
        alt={imageName}
        width={1000}
        height={1000}
      /> */}

      {/*
      <h1>{imageName}</h1>
      <p>Item Description:{item.description}</p> */}
      {/* <ItemCommentForm itemId={item.id} /> */}
      <SetCookieForm />
      {/* <CookieStorage /> */}
    </>
  );
}
