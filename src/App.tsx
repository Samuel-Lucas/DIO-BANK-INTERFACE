import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import { Layout } from './components/Layout';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

function App() {
  return (
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <Layout>
          <Routes>
            <Route path='/' element={
              <Home />
            }>
            </Route>
            <Route path='/conta' element={
              <Account />
            }>
            </Route>
          </Routes>
        </Layout>
      </ChakraProvider>
    </BrowserRouter>
  );
}

export default App;