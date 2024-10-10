'use client';

import { useState } from 'react';
import createOrUpdateCookie from './actions';

export default function ItemCommentForm(props) {
  // const [comment, setComment] = useState('');
  const [count, setCount] = useState(0);
  return (
    <form>
      {/* <textarea
        value={comment}
        onChange={(event) => setComment(event.currentTarget.value)}
      /> */}
      {/* <input
        value={count}
        min={0}
        step={1}
        onChange={(event) => setComment(event.currentTarget.value)}
      /> */}
      <textarea value={count}></textarea>
      <button
        type="button"
        onClick={() => setCount(count + 1)}
        // formAction={() => createOrUpdateCookie(props.itemId, count)}
      >
        +
      </button>

      <button
        type="button"
        onClick={() => {
          count > 0 ? setCount(count - 1) : setCount(0);
        }}
      >
        -
      </button>
      <button formAction={() => createOrUpdateCookie(props.itemId, count)}>
        Add to Cart
      </button>
    </form>
  );
}
