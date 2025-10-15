import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import { Layout } from './components/Layout';
import { ChakraProvider, defaultSystem } from '@chakra-ui/react';
import AccountInfo from './pages/AccountInfo';
import { createContext } from 'react';

interface IAppContext {
  user: string
}

export const AppContext = createContext({} as IAppContext)

const AppContextProvider = ({ children }: any) => {

  const user = 'Sam'

  return (
    <AppContext.Provider value={{ user }}>
      { children }
    </AppContext.Provider>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppContextProvider>
        <ChakraProvider value={defaultSystem}>
          <Layout>
            <Routes>
              <Route path='/' element={
                <Home />
              }>
              </Route>
              <Route path='/conta/:id' element={
                <Account />
              }>
              </Route>
              <Route path='/accountinfo' element={
                <AccountInfo />
              }></Route>
            </Routes>
          </Layout>
        </ChakraProvider>
      </AppContextProvider>
    </BrowserRouter>
  );
}

export default App;