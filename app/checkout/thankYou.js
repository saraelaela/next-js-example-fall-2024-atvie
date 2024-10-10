import { notFound } from 'next/navigation';
import React from 'react';

export default function thankYou() {
  return (
    <>
      <h1>Thanks for your Order!</h1>
      <p>We'll be in touch soon</p>
      {/* Optional Chaining, means if FruitCommentToDisplay === undefined, return undefined, else displays fruitCommentToDisplay.comment
      <div>{fruitCommentToDisplay?.comment}</div>
      <FruitCommentForm fruitId={fruit.id} /> */}
    </>
  );
}
