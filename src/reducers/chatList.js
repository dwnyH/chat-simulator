import {CHAT_TYPE_MESSAGE, CHAT_TYPE_UPDATE, CHAT_TYPE_DELETE, USER_TYPE_CONNECT, USER_TYPE_DISCONNECT} from '../actions/ActionTypes';

const initialState = {
    message: {},
    users: {}
}

export default function setChatLists(state = initialState, action) {
    const copiedState = Object.assign({}, state);

    switch(action.type) {
        case CHAT_TYPE_MESSAGE:
            const {user, message} = action.data;
            if (!state.users.hasOwnProperty(user.id)) {
                copiedState.users[user.id] = user;
                copiedState.users[user.id].connected = true;
            }

            copiedState.message[message.id] = message;
            copiedState.message[message.id].userId = user.id;

            return copiedState;

        case CHAT_TYPE_UPDATE:
            if (action.data.hasOwnProperty('message')) {
                copiedState.message[action.data.message.id]['text'] = action.data.message.text;
            } else {
                copiedState.users[action.data.user.id]['user_name'] = action.data.user['user_name'];
                copiedState.users[action.data.user.id]['display_name'] = action.data.user['display_name'];
            }
            return copiedState;

        case CHAT_TYPE_DELETE:
            delete copiedState.message[action.data.id];
            return copiedState;

        case USER_TYPE_CONNECT:
            copiedState.users[action.data.id] = action.data;
            copiedState.users[action.data.id].connected = true;
            return copiedState;

        case USER_TYPE_DISCONNECT:
            copiedState.users[action.data].connected = false;
            return copiedState;

        default:
            return state;
    }
}
