import React, { useState, useEffect } from 'react';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_DOG_PHOTO } from './query';

function DelayedQuery() {
  const [dog, setDog] = useState(null);
  const [getDog, { loading, data }] = useLazyQuery(GET_DOG_PHOTO);

  useEffect(() => {
    console.log('IMAGEM');
    if (data && data.dog) {
      setDog(data.dog);
    }
  }, [data]);

  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {dog && <img alt="" src={dog.displayImage} />}
      <button
        type="button"
        onClick={async () => getDog({ variables: { breed: 'bulldog' } })}
      >
        Click me!
      </button>
    </div>
  );
}
export default DelayedQuery;
