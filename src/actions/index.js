import {CHAT_TYPE_MESSAGE, CHAT_TYPE_UPDATE, CHAT_TYPE_DELETE, USER_TYPE_CONNECT, USER_TYPE_DISCONNECT} from '../actions/ActionTypes';

export function chatTypeMessage(data) {
    return {
        type: CHAT_TYPE_MESSAGE,
        data
    }
}

export function chatTypeDelete(data) {
    return {
        type: CHAT_TYPE_DELETE,
        data
    }
}

export function chatTypeUpdate(data) {
    return {
        type: CHAT_TYPE_UPDATE,
        data
    }
}

export function userTypeConnect(data) {
    return {
        type: USER_TYPE_CONNECT,
        data
    }
}

export function userTypeDisconnect(data) {
    return {
        type: USER_TYPE_DISCONNECT,
        data
    }
}
