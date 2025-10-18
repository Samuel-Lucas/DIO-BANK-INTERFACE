import './App.css'
import { BrowserRouter, } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import { AppContextProvider } from './components/context/AppContextComponent';
import MainRoutes from './routes';
import { createLocalStorage } from './services/Storage';

function App() {

  createLocalStorage()

  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={defaultSystem}>
          <Layout>
            <MainRoutes />
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App