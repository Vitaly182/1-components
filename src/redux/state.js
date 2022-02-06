const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';



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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };        
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === ADD_MESSAGE) {
            let newMessage = {
                id: 7,
                name: 'Vitaly',
                message: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText='';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._state.dialogsPage.newMessageText = action.newText;
            this._callSubscriber(this._state);
        }
    }

}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const addUpdateNewPostTextActionCreator = (text) => 
    ({ type: UPDATE_NEW_POST_TEXT, newText: text })

export const addMessageActionCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const addUpdateNewMessageTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default store;

window.store = store; //если понадобится глобально обратиться










