<<<<<<< HEAD
import './App.css';

=======
// Imports to provide JWT token system behavior
>>>>>>> 6adeb933788dded8135fc9e8b918a97308c3cb0f
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';

import { setContext } from '@apollo/client/link/context';
import { Outlet } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

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
          <Header />
          <main className="mx-3 p-3">
            <Outlet />
          </main>
          <Footer />
      </ApolloProvider>
    </>
  )
}

export default App;
