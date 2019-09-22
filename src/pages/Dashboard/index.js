import React, { useState } from 'react';
import Dogs from '~/components/Dogs';
import Photo from '~/components/Photo';
import DelayedQuery from '~/components/Photo/ManualPhoto';

function Dashboard() {
  const [breed, useBreed] = useState();

  return (
    <>
      <Dogs onDogSelected={useBreed} />
      {!!breed && <Photo breed={breed} />}
      <DelayedQuery />
    </>
  );
}

export default Dashboard;
