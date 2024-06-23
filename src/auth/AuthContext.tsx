import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import axios from "axios";


interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    user: any;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{children: ReactNode}> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [user, setUser] = useState<any>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        
        if(token){
            axios.post('http://localhost:3000/validateToken', {token})
                .then(response => {
                    if (response.data) {
                        setIsAuthenticated(true)
                        setUser({
                            id: localStorage.getItem('userId'),
                            name: localStorage.getItem('userName')
                        })
                    } else {
                        localStorage.clear()
                    }
                })
                .catch(() => localStorage.clear())
        }
    }, [])

    const login = (token: string) => {
        localStorage.setItem('token', token);
        axios.post('http://localhost:3000/validateToken', { token })
            .then(response => {
                if(response.data) {
                    setIsAuthenticated(true);
                    setUser({
                        id: localStorage.getItem('userId'),
                        name: localStorage.getItem('userName')
                    })
                }
            })
    }

    const logout = () => {
        localStorage.clear();
        setIsAuthenticated(false)
        setUser(null)
    }
    
    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout, user}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    const context = useContext(AuthContext)
    if(context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider')
    }
    return context
}