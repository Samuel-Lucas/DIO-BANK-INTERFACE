import { useContext } from "react"
import { api } from "../mock/Api"
import { AppContext } from "../components/context/AppContextComponent"
import { useNavigate } from "react-router-dom"

export const useLogin = () => {
    const { setIsLoggedIn } = useContext(AppContext)
    const navigate = useNavigate()

    const login = async (email: string): Promise<void> => {
        const data: any = await api

        if (email !== data.email) {
            return alert('Email inválido')
        }

        setIsLoggedIn(true)
        navigate(`conta/${data.id}`)
    }

    return { login }
}
