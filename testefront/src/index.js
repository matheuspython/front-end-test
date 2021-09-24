import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import ApolloClient from 'apollo-boost'
import {ApolloProvider} from '@apollo/react-hooks'



const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_GIT_HUB_TOKEN}`
  }
})


ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
