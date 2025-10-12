import { Center, SimpleGrid } from "@chakra-ui/react"
import CardInfo from "../components/card/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../mock/Api"

interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number
}

export const Account = () => {

    const [userData, setUserData] = useState<null | UserData>()
    
    useEffect(() => {
    const getData = async () => {
        const data: any | UserData = await api
        setUserData(data)
    }

        getData()
    }, [])

    console.log(userData)

    return (
        <Center>
            <SimpleGrid columns={2} gap={8} paddingTop={16}>
                <CardInfo text='Informação de acesso'/>
                <CardInfo text='Informação da conta'/>
            </SimpleGrid>
        </Center>
    )
}

export default Account