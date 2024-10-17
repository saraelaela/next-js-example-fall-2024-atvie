'use client';

import { useState } from 'react';
import { createCookie } from './actions';

export default function SetCookieForm(props) {
  const [cookieValue, setCookieValue] = useState(0);
  console.log('Received productName hey:', props.productName);

  return (
    <form>
      {/* {props.productName} */}
      <input
        value={cookieValue}
        onChange={(event) => setCookieValue(event.currentTarget.value)}
      />
      <button type="button" onClick={() => setCookieValue(cookieValue + 1)}>
        +
      </button>
      <button
        type="button"
        onClick={() => {
          cookieValue > 0 ? setCookieValue(cookieValue - 1) : setCookieValue(0);
        }}
      >
        -
      </button>
      <button formAction={() => createCookie(props.productName, cookieValue)}>
        Add to Cart
      </button>
    </form>
  );
}
