import { useContext } from 'react'
import './Header.css'
import { AppContext } from '../context/AppContextComponent'
import { Button, Flex, Spacer } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () => {
        setIsLoggedIn(false)
        navigate('/')
    }
    
    return(
        <Flex backgroundColor='orange' padding='5px'>
            <div className='header'>
                Dio Bank
            </div>
            {
                isLoggedIn && (
                    <>
                        <Spacer />
                        <Button onClick={() => logout()}>
                            Sair
                        </Button>
                    </>
                )
            }
        </Flex>
    )
}