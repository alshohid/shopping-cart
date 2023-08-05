import { createContext, useContext, useState } from 'react'

const Auth = createContext()

const AuthProvider = ({ children }) => {
  const [myItem, setMyItem] = useState([])

  console.log('global context ', myItem)
  console.log(myItem.length)

  return <Auth.Provider value={[myItem, setMyItem]}>{children}</Auth.Provider>
}
const MyContext = () => useContext(Auth)
export { AuthProvider, MyContext }
