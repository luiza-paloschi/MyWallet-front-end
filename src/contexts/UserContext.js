import { createContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const UserContext = createContext()

export default function UserProvider({ children }) {
    
    const loggedUser = JSON.parse(localStorage.getItem("user"))
    const [user, setUser] = useState(loggedUser !== null ? loggedUser : {})
    const navigate = useNavigate()

    useEffect(() => {
        if (loggedUser === null) {
            navigate("/")
        } 
    }, [])

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}