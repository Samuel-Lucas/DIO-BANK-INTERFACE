import { ChakraProvider } from '@chakra-ui/react'
import { defaultSystem } from "@chakra-ui/react"
import { CardWithForm } from './components/card/Card';
import { Header } from './components/header/Header';

function App() {
  return (
    <ChakraProvider value={defaultSystem}>
      <Header />
      <CardWithForm />
    </ChakraProvider>
  );
}

export default App;