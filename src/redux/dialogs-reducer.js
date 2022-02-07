const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

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
    ],
    newMessageText: ''
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let newMessage = {
                id: 7,
                name: 'Vitaly',
                message: state.newMessageText
            }
            let stateCopy = {...state};
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push(newMessage);
            stateCopy.newMessageText='';
            return stateCopy;
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
export const addUpdateNewMessageTextCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    }
}

export default dialogsReducer;