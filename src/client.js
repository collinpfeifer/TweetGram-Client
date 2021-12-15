import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from 'apollo-link-context';

const httpLink = createHttpLink({
  uri: process.env.REACT_APP_API,
});

const authLink = setContext(() => {
  const token = localStorage.getItem('jwtToken');
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

export default client;
