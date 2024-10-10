'use client';

import { useState } from 'react';
import { createCookie } from './actions';

export default function SetCookieForm() {
  const [cookieValue, setCookieValue] = useState(0);

  return (
    <form>
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
      <button formAction={() => createCookie(cookieValue)}>Add to Cart</button>
    </form>
  );
}
