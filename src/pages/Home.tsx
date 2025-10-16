import { Card, ChakraProvider, defaultSystem, Field, Input, Stack } from "@chakra-ui/react"
import { CardWithForm } from "../components/card/Card"
import { useState } from "react"
import { ButtonCustom } from "../components/button/ButtonCustom"
import { login } from "../services/Login"

const Home = () => {
    
    const [email, setEmail] = useState<string>("")

    return (
        <ChakraProvider value={defaultSystem}>
            <div className='container'>
                <Card.Root maxW="sm" className="card">
                    <Card.Header>
                        <Card.Title>Login</Card.Title>
                        <Card.Description>
                        preencha os dados para fazer o login
                        </Card.Description>
                    </Card.Header>
                    <Card.Body>
                        <Stack gap="4" w="full">
                        <Field.Root>
                            <Field.Label>Email</Field.Label>
                            <Input placeholder="email" type="email" value={email} onChange={(event) => {
                            setEmail(event.target.value)
                            }} />
                        </Field.Root>
                        <Field.Root>
                            <Field.Label>Senha</Field.Label>
                            <Input placeholder="senha" type="password" />
                        </Field.Root>
                        </Stack>
                    </Card.Body>
                    <Card.Footer justifyContent="flex-end">
                        <ButtonCustom colorScheme="teal" 
                        size="sm" 
                        width="100%" 
                        marginTop="5px" 
                        onClick={() => login(email)}>Entrar</ButtonCustom>
                    </Card.Footer>
                </Card.Root>
            </div>
        </ChakraProvider>
    )
}

export default Home