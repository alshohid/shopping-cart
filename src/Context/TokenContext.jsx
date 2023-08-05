import { createContext, useContext, useEffect, useState } from 'react'

const TokenContext = createContext()
const TokenProvider = ({ children }) => {
  const [myToken, setMyToken] = useState('')
  useEffect(() => {
    const storedToken = localStorage.getItem('token')
    if (storedToken) {
      setMyToken(storedToken)
    }
  }, [null])

  console.log('global token', myToken)
  return (
    <TokenContext.Provider value={[myToken, setMyToken]}>
      {children}
    </TokenContext.Provider>
  )
}
const MyTokenContext = () => useContext(TokenContext)
export { TokenProvider, MyTokenContext }
