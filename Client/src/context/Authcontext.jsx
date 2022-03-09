import { useState } from 'react'
import { createContext } from 'react'

export const Authcontext = createContext({ token: {}, handletoken: () => {} })

export const AutcontextProvider = ({ children }) => {
  const [token, setToken] = useState({})

  const handletoken = (token) => {
    setToken(token)
  }
  return (
    <Authcontext.Provider value={{ token, handletoken }}>
      {children}
    </Authcontext.Provider>
  )
}
