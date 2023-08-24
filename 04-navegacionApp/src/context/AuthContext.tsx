import { createContext, useReducer } from "react";
import { authReducer } from "./authReducer";


// Definir cómo luce, que información tendre aqui
export interface AuthState{
    isLoggedIn: boolean;
    username?: string;
    favoriteIcon?: string;
}

// Estado inicial
export const authInitialSate: AuthState = {
    isLoggedIn: false,
    username: undefined,
    favoriteIcon: undefined,
}

//lo usaremos para decirle a react cómo luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logout: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (userName: string) => void;
}

//Crear el contexto
export const AuthContext = createContext( {} as AuthContextProps )

// Componente proveedor del estado
export const AuthProvider = ({ children }: any ) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialSate);

    const signIn = () => {
        dispatch({ type: 'signIn' });
    }

    const logout = () => {
        dispatch({ type: 'logout' });
    }

    const changeFavoriteIcon = ( iconName: string) => {
        dispatch({ type: 'changeFavIcon', payload: iconName })
    }

    const changeUsername = ( userName: string) => {
        dispatch({ type: 'changeUsername', payload: userName })
    }

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logout,
            changeFavoriteIcon,
            changeUsername,
        }}>
            { children }
        </AuthContext.Provider>
    )
}