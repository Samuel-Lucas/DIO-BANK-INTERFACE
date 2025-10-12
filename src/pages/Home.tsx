import { ChakraProvider, defaultSystem } from "@chakra-ui/react"
import { CardWithForm } from "../components/card/Card"

const Home = () => {
    return (
        <ChakraProvider value={defaultSystem}>
            <div className='container'>
                <CardWithForm />
            </div>
        </ChakraProvider>
    )
}

export default Home