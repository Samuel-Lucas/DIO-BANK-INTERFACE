import { ChakraProvider } from '@chakra-ui/react'
import { defaultSystem } from "@chakra-ui/react"
import { CardWithForm } from './components/card/Card';
import { Header } from './components/header/Header';
import './App.css'

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <div className='container'>
        <CardWithForm />
      </div>
    </ChakraProvider>
  );
}

export default App;