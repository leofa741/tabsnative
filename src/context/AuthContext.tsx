import React, { createContext, useReducer } from "react"
import { authReducer } from './authReducer';


export interface AuthState{
isLoggedIn: boolean,
username?: string,
favoriteIcon?: string,
}

export const authInitialState: AuthState={
isLoggedIn:false,
username:undefined,
favoriteIcon: undefined
}


export interface AuthContextProps{
    authState: AuthState,
    sigIn:()=>void;
    changeFavicon: (iconName: string) => void;
    logOut: () => void;
    changeUsernameSelect: (username: string) => void;
}

export const AuthContext= createContext({} as AuthContextProps) 

export const AuthProvider =( {children}:any )=>{
const [authState,dispach]=  useReducer(authReducer,authInitialState)

const sigIn = ()=>{
    dispach({type:'signIn'})
}

const changeFavicon =(iconName:string)=>{
dispach({type:'changeIcon',payload: iconName})

}
const changeUsernameSelect=(username:string)=>{
    dispach({type:'changeUsername',payload:username})
}

const logOut =()=>{

    dispach({type:'logout'})
}

return(

    <AuthContext.Provider value={{
       authState,
       sigIn,
       changeFavicon,
       logOut,
       changeUsernameSelect
    }}
    >
    {children}    
    </AuthContext.Provider>

)
}