const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: 
            let newMessage = {
                id: 7,
                name: 'Vitaly',
                message: action.newMessageText
            }
            return {
                ...state,
                messages: [...state.messages, newMessage]
            };

        default:
            return state;
    }
}

export const addMessageCreator = (newMessageText) => {
    return {
        type: ADD_MESSAGE,
        newMessageText
    }
}


export default dialogsReducer;