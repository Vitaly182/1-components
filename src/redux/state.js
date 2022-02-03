
let rerenderEntireTree = () => {

}



let state = {

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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText='';
    rerenderEntireTree(state);
}


export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export const subscribe = (observer) => {
    rerenderEntireTree = observer;  // наблюдатель - паттерн observer
}


export default state;