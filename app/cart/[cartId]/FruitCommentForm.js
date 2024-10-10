'use client';

import { useState } from 'react';
import SetCookieForm from '../../cookie-example/SetCookieForm';
import createOrUpdateCookie from './actions';

export default function FruitCommentForm(props) {
  const [comment, setComment] = useState('');
  return (
    <form>
      <SetCookieForm />
      {/* <textarea
        value={comment}
        onChange={(event) => setComment(event.currentTarget.value)}
      /> */}
      <button formAction={() => createOrUpdateCookie(props.fruitId, comment)}>
        Add comment
      </button>
    </form>
  );
}
