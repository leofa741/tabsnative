import { AuthState } from './AuthContext';

type AuthAction=
|{ type:'signIn'}
|{type: 'changeIcon',payload:string}
|{ type:'logout'};




export const authReducer = (state: AuthState, action: AuthAction): AuthState => {


    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                username: 'leonardo'
            }
        case 'changeIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
            case 'logout':
                return{
                ...state,
            isLoggedIn:false,
            username:undefined,
            favoriteIcon:undefined
                }


        default:
            return state
    }

}