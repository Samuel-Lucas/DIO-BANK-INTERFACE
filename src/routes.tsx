import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Account from "./pages/Account"
import AccountInfo from "./pages/AccountInfo"
import { useContext } from "react"
import { AppContext } from "./components/context/AppContextComponent"

const MainRoutes = () => {

    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
            <Route path='/' element={
            <Home />
            }>
            </Route>
            <Route path='/conta/:id' element={ isLoggedIn ? <Account /> : <Home />}>
            </Route>
            <Route path='/accountinfo' element={
            <AccountInfo />
            }></Route>
        </Routes>
    )
}

export default MainRoutes