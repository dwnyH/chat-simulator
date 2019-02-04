import { combineReducers } from 'redux';
import chatList from './chatList';
// import ui from './ui';

const reducers = combineReducers({
    chatList
});

export default reducers;