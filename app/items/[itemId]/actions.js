'use server';

// Case A: cookie is undefined (not set)
// Case B: cookie set, id doesn't exist
// Case C: cookie set, id exists

import { cookies } from 'next/headers';
import { getCookie } from '../../../util/cookies';
import { parseJson } from '../../../util/json';

export default async function createOrUpdateCookie(itemId, count) {
  // 1. get current cookie!
  const itemsCommentsCookie = await getCookie('itemsComments');

  // 2. parse the cookie value
  const itemsComments =
    itemsCommentsCookie === undefined
      ? // Case A: cookie undefined
        []
      : parseJson(itemsCommentsCookie);

  // 3. edit the cookie value
  const itemToUpdate = itemsComments.find((itemComment) => {
    return itemComment.id === itemId;
  });

  // Case B: cookie set, id doesn't exist
  if (!itemToUpdate) {
    itemsComments.push({ id: itemId, count: count });
  } else {
    // Case C: cookie set, id exists already
    itemToUpdate.count = count;
  }

  (
      // 4. we override the cookie
      await cookies(),
    )
    .set('itemsComments', JSON.stringify(itemsComments));
}
