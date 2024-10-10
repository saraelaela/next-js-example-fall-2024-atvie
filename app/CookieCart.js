'use client';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import createOrUpdateCookie from './items/[itemId]/actions';

export default function CookieCart(props) {
  const [count, setCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const itemAmount = document.cookie
      .split('; ')
      .find((row) => row.startsWith('itemAmount='))
      ?.split('=')[1];

    console.log(itemAmount);

    setCount(itemAmount);
  }, []);

  return (
    <button
      onClick={() => {
        // DONT DO THIS!!!
        // DONT USE document.cookie!!

        const newCookie = JSON.stringify({ count });
        document.cookie = `itemAmount=${newCookie}`;
        setCount(newCookie);
        router.refresh();
      }}
    >
      generate
    </button>
  );
}
