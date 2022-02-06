import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {

    _callSubscriber() {

    },

    _state: {

        profilePage: {
            posts: [
                { id: 1, message: 'Hi, what\'s up?', likesCount: 15 },
                { id: 2, message: 'The best or nothing', likesCount: 25 }
            ],
            newPostText: ''
        },
    
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Vitaly' },
                { id: 2, name: 'Max' },
                { id: 3, name: 'Bork' },
                { id: 4, name: 'Ork' },
                { id: 5, name: 'Lind' }
            ],
        
            messages: [
                { id: 1, name: 'Vitaly', message: 'Hi' },
                { id: 2, name: 'Vitaly', message: "Who's that ?" },
                { id: 3, name: 'Max', message: 'Nothing' },
                { id: 4, name: 'Max', message: 'No' },
                { id: 5, name: 'Ork', message: 'What' },
                { id: 6, name: 'Ork', message: 'You' }
            ],
            newMessageText: ''
        },
    
        sitebar: {
            friends: [
                { id:1, name: 'Max'},
                { id:2, name: 'Bork'},
                { id:3, name: 'Lind'}
            ]
        }
    },

    getState() {
        return this._state;
    },

    subscribe(observer) {
        this._callSubscriber = observer;  // наблюдатель - паттерн observer
    },


    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sitebar = sidebarReducer(this._state.sitebar, action)

        this._callSubscriber(this._state);
        
    }
}


export default store;

window.store = store; //если понадобится глобально обратиться










