import { AuthState, authInitialState } from './AuthContext';

type AuthAction =
| { type: 'signIn' }
| { type: 'changeUsername', payload: string }
| { type: 'logout' }
| { type: 'changeFavIcon' , payload: string };

export const authReducer = ( state: AuthState, action: AuthAction ): AuthState =>{

    switch (action.type) {
        case 'signIn':
            return{
                ...state,
                isLoggedIn: true,
            }

        case 'changeUsername':
            return{
                ...state,
                userName: action.payload
            }

        case 'logout':
            return{
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }

        case 'changeFavIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }

        default:
            return state;
    }
}