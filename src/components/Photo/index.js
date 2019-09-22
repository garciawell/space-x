import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import PropTypes from 'prop-types';
import { GET_DOG_PHOTO } from './query';

function Photo({ breed }) {
  const { loading, error, data, refetch, networkStatus } = useQuery(
    GET_DOG_PHOTO,
    {
      variables: { breed },
      // skip: !breed,
      // pollInterval: 500,
      notifyOnNetworkStatusChange: true,
    }
  );
  if (networkStatus === 4) return 'Refetching!';
  if (loading) return 'PHOTO CARREGANDO';
  if (error) return `Error! ${error}`;
  return (
    <>
      <img
        alt="FOto Imagem"
        src={data.dog.displayImage}
        style={{ height: 100, width: 100 }}
      />
      <button type="button" onClick={() => refetch()}>
        Refetch!
      </button>
    </>
  );
}

Photo.propTypes = {
  breed: PropTypes.string.isRequired,
};

export default Photo;
