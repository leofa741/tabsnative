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
}


export const AuthContext= createContext({} as AuthContextProps) 


export const AuthProvider =( {children}:any )=>{

const [authState,dispach]=  useReducer(authReducer,authInitialState)

const sigIn = ()=>{

    dispach({type:'signIn'})
}

return(
    <AuthContext.Provider value={{
       authState,
       sigIn
    }}

    >

    {children}
    
    </AuthContext.Provider>

)


}