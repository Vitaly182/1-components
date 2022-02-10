import {createStore, combineReducers} from 'redux';
import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import sidebarReducer from "./sidebar-reducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sitebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;