import { count } from 'console';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react';
import { getItemInsecure } from '../../../database/items';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';
import SetCookieForm from '../../cookie-example/SetCookieForm';

export default async function SingleItemPage(props) {


  const itemId = (await props.params).itemId;
  console.log('hello world', itemId);

  // create a url with the itemId inside
  // name = itemId

  const items = await getItemInsecure(itemId);
  console.log('ITEM', items);

  // items = array with infos about the product
  const productName = []
    .concat(...Object.values(items))[1]
    .split(' ')
    .join('-');

  const productDescription = [].concat(...Object.values(items))[2];

  const itemCommentsCookie = await getCookie('itemsComments', count);

  let itemComments = parseJson(itemCommentsCookie) || [];

  if (!items) {
    return notFound();
  }

  if (!Array.isArray(itemComments)) {
    itemComments = [];
  }

  console.log('Rendering SetCookieForm with productName:', productName);

  return (
    <>
      <Image
        src={`/images/${productName}.webp`}
        alt={productName}
        width={1000}
        height={1000}
      />
      {productDescription}
      <SetCookieForm productName={productName} />
    </>
  );
}
