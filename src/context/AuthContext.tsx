import React, { createContext, useReducer } from 'react';

import { authReducer } from './authReducer';

//Definir cómo luce, que información tendré aqui
export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

//Estado inicial

export const authInitialState: AuthState ={
    isLoggedIn: false,
    userName: undefined,
    favoriteIcon: undefined,
}

//Lo usaremos para decirle a React cómo luce  y qué expone el context

export interface AuthContextProps {
    authState: AuthState;
    signIn: ()=> void;
    logout: () => void;
    changeUsername: (username: string) => void;
    changeFavoriteIcon: (iconName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext( { } as AuthContextProps );

//Componente proveeder del estado

export const AuthProvider = ( { children }: any ) =>{

    const [authState, dispatch] = useReducer( authReducer, authInitialState );

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeUsername = ( username: string ) => {
        dispatch({ type: 'changeUsername', payload: username })
    }

    const changeFavoriteIcon = ( iconName : string ) =>{
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    return(
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername
        }}>
            { children }
        </AuthContext.Provider>
    )
}
