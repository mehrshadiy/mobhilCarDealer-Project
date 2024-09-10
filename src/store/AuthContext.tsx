import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {UserType} from "@/types/AuthResponse";
import {toast} from "react-toastify";

interface Props {
    children: ReactNode
}

interface AuthContextProps {
    isLogin: boolean
    onLogin: (jwt: string, user:UserType) => void
    onLogout: () => void
}

const AuthContext = createContext<AuthContextProps>({
    isLogin : false,
    onLogin : () => {},
    onLogout: () => {}
})

export const useUser = () => useContext(AuthContext)

export function AuthContextProvider({children}: Props) {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        if (window.localStorage.getItem('token')){
            setIsLogin(true)
        }
    }, []);

    const LoginHandler = (jwt: string, user:UserType)=>{
        window.localStorage.setItem('token',jwt);
        window.localStorage.setItem('user',JSON.stringify(user))
        setIsLogin(true)
    }
    const LogOutHandler = () => {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('user')
        setIsLogin(false)
        console.log('is logout')
        toast.success('you are logged out')
    }

    return(
        <AuthContext.Provider value={{isLogin:isLogin, onLogin:LoginHandler, onLogout: LogOutHandler}}>
            {children}
        </AuthContext.Provider>
    )
}
