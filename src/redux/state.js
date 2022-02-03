
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
            ]
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

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
    
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText='';
        this._callSubscriber(this._state);
    },

    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;  // наблюдатель - паттерн observer
    }
}

export default store;

window.store = store; //если понадобится глобально обратиться










