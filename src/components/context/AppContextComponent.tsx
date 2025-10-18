import { createContext, useEffect, useState } from 'react';
import { createLocalStorage, getAllLocalStorage } from '../../services/Storage';

interface IAppContext {
  user: string,
  isLoggedIn: boolean,
  setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) => {

  const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
  const storage = getAllLocalStorage()
  const user = 'Sam'

  useEffect(() => {
    if (storage) {
      const { login } = JSON.parse(storage)
      setIsLoggedIn(login)
    }
  }, [])

  return (
    <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
      { children }
    </AppContext.Provider>
  )
}