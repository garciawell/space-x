import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyle from './styles/global';
import { Wrapper } from './styles/components';
import Routes from './routes';
import { ApolloProvider } from '@apollo/react-hooks';
import api from '~/services/api';

const App = () => (
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
);
export default App;
