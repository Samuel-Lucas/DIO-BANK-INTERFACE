import { Card, Field, Input, Stack } from "@chakra-ui/react"
import { ButtonCustom } from "../button/ButtonCustom";
import { chamarBoasVindas } from "../../services/Texto";

export const CardWithForm = () => (
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
          <Input placeholder="email" type="email"/>
        </Field.Root>
        <Field.Root>
          <Field.Label>Senha</Field.Label>
          <Input placeholder="senha" type="password"/>
        </Field.Root>
      </Stack>
    </Card.Body>
    <Card.Footer justifyContent="flex-end">
      <ButtonCustom colorScheme="teal" 
        size="sm" 
        width="100%" 
        marginTop="5px" 
        onClick={chamarBoasVindas}>Entrar</ButtonCustom>
    </Card.Footer>
  </Card.Root>
)