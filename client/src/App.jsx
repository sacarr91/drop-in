// Imports to provide JWT token system behavior
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';

// Imports for app UI features
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';

// imports for app styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './utils/style.css';
import './App.css'


const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {

  return (
    <>
      <ApolloProvider client={client}>
      <div id='page-container'>
      <div id='content-wrap'>
          <Header />
          <main className="mx-3 p-3">
            <Outlet />
          </main>
          </div>
          <Footer />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App;
