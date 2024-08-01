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

// create link to graphQL
const httpLink = createHttpLink({
  uri: '/graphql',
});

// code to handle setContext so that the requests require Authorization with JWT  
const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// code to handle authLink for persistent use of JWT
const client = new ApolloClient({

  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <div className='bg-style'>
          <Header />
          <main className="mx-3 p-3">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ApolloProvider>
    </>
  )
}

export default App;
