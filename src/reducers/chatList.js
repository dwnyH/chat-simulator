import {CHAT_TYPE_MESSAGE, CHAT_TYPE_UPDATE, CHAT_TYPE_DELETE, USER_TYPE_CONNECT, USER_TYPE_DISCONNECT} from '../actions/ActionTypes';

const initialState = {
    message: {},
    users: {},
};

export default function setChatLists(state = initialState, action) {
    const copiedState = Object.assign({}, state);
    const { users, message } = copiedState;

    switch(action.type) {
        case CHAT_TYPE_MESSAGE:
            if (!state.users.hasOwnProperty(action.data.user.id)) {
                users[action.data.user.id] = action.data.user;
                users[action.data.user.id].connected = true;
            }

            message[action.data.message.id] = action.data.message;
            message[action.data.message.id].userId = action.data.user.id;

            return copiedState;

        case CHAT_TYPE_UPDATE:
            if (action.data.hasOwnProperty('message')) {
                message[action.data.message.id]['text'] = action.data.message.text;
            } else {
                users[action.data.user.id]['user_name'] = action.data.user['user_name'];
                users[action.data.user.id]['display_name'] = action.data.user['display_name'];
            }
            return copiedState;

        case CHAT_TYPE_DELETE:
            delete message[action.data.id];
            return copiedState;

        case USER_TYPE_CONNECT:
            users[action.data.id] = action.data;
            users[action.data.id].connected = true;
            return copiedState;

        case USER_TYPE_DISCONNECT:
            users[action.data].connected = false;
            return copiedState;

        default:
            return state;
    }
}
