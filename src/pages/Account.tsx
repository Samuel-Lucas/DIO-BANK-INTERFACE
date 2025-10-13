import { Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import { useParams, useNavigate } from "react-router-dom"
import CardInfo from "../components/card/CardInfo"
import { useEffect, useState } from "react"
import { api } from "../mock/Api"

interface UserData {
  email: string,
  password: string,
  name: string,
  balance: number,
  id: string
}

export const Account = () => {

    const [userData, setUserData] = useState<null | UserData>()
    const { id } = useParams()
    const navigate = useNavigate()
    const actualDate = new Date().toLocaleString()
    
    useEffect(() => {
        const getData = async () => {
            const data: any | UserData = await api
            setUserData(data)
        }

        getData()
    }, [])

    if (userData && id !== userData.id) {
        navigate('/')
    }

    return (
        <Center>
            <SimpleGrid columns={2} gap={8} paddingTop={16}>
                {
                    userData === null || userData === undefined ? 
                    (
                        <Center>
                            <Spinner size='xl' color='white'/>
                        </Center>
                    )
                    : 
                    (
                        <>
                            <CardInfo 
                                mainContent={`Bem vindo ${userData?.name}`} 
                                content={`${actualDate}`} 
                            />
                            <CardInfo 
                                mainContent='Saldo'
                                content={`R$ ${userData.balance}`} 
                            />
                        </>
                    )
                }
            </SimpleGrid>
        </Center>
    )
}

export default Account