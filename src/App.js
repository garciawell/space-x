import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/components';
import Routes from './routes';
import api from '~/services/api';
import apiForm from '~/services/apiForm';
import Form from '~/components/Form';

const App = () => (
  <>
    <ApolloProvider client={api}>
      <BrowserRouter>
        <>
          <Wrapper>
            <Routes />
          </Wrapper>
          <GlobalStyle />
        </>
      </BrowserRouter>
    </ApolloProvider>
    <ApolloProvider client={apiForm}>
      <Form />
    </ApolloProvider>
  </>
);
export default App;
