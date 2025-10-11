import { Card, Field, Input, Stack } from "@chakra-ui/react"
import { ButtonCustom } from "../button/ButtonCustom";
import { chamarBoasVindas } from "../../services/Texto";
import { useEffect, useState } from "react";
import { login } from "../../services/Login";
import { api } from "../../mock/Api";

export const CardWithForm = () => {
  const [email, setEmail] = useState("")

  useEffect(() => {
    const getData = async () => {
      const data = await api
    }

    getData()
  })

  console.log('valor digitado', email)
  return (
  <Card.Root maxW="sm">
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
  )
}