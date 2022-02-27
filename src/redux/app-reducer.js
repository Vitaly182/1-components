
import { auth } from './../redux/auth-reducer';

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';


let initialState = {
    initialized: false,
    globalError: null
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCES:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
};

export const initializedSucces = () => ({ type: INITIALIZED_SUCCES })

export const initializeApp = () => {
    return (
        (dispatch) => {       
            let promise = dispatch(auth());
            // promise2 = dispatch(something else);
            // promise3 = dispatch(something else);
            Promise.all([promise]).
                then(() => {
                dispatch(initializedSucces());      
            });    
        }
    )
} 







export default appReducer;