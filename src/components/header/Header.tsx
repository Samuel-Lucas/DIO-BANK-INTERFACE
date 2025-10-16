import { useContext } from 'react'
import './Header.css'
import { AppContext } from '../context/AppContextComponent'

export const Header = () => {

    const context = useContext(AppContext)

    console.log(context)
    
    return(
        <div className='header'>
            Dio Bank
        </div>
    )
}