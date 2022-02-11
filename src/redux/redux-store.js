import {createStore, combineReducers} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";
import authReducer from './auth-reducer';


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sitebar: sidebarReducer,
    auth: authReducer
});

let store = createStore(reducers);

window.store = store;

export default store;