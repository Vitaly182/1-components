




let state = {

    profilePage: {
        posts: [
            { id: 1, message: 'Hi, what\'s up?', likesCount: 15 },
            { id: 2, message: 'The best or nothing', likesCount: 25 }
        ]
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
}

export default state;