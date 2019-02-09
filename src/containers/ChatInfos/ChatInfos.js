import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import ChatList from '../../components/ChatList/ChatList';
import ChatUsers from '../../components/ChatUsers/ChatUsers';
import './ChatInfos.css'
import PropTypes from 'prop-types';

const propTypes = {
    users: PropTypes.object,
    messageText: PropTypes.array,
    requestLists: PropTypes.func
};

class ChatInfos extends Component {
    async componentDidMount() {
        this.props.requestLists();
    }

    render() {
        const { message, user } = this.props;

        return (
            <div className="main">
                <ChatUsers users={user} />
                <div className="chatContainer">
                    <ChatList messageText={message} users={user}/>
                    <div className="chatInput"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { message, users } = state.chatList;
    return {
        message: Object.values(message),
        user: users
    }
};

const mapDispatchToProps = (dispatch) => ({
    async requestLists() {
        const chatPromise = await fetch('https://chat-simulator.firebaseio.com/chats.json');
        const chatDatas = await chatPromise.json();

        chatDatas.forEach((chatData) => {
            setTimeout(() => {
                switch(chatData.payload.type) {
                    case 'message':
                        dispatch(actions.chatTypeMessage(chatData.payload));
                        break;
                    case 'update':
                        dispatch(actions.chatTypeUpdate(chatData.payload));
                        break;
                    case 'delete':
                        dispatch(actions.chatTypeDelete(chatData.payload.message));
                        break;
                    case 'connect':
                        dispatch(actions.userTypeConnect(chatData.payload.user));
                        break;
                    case 'disconnect':
                        dispatch(actions.userTypeDisconnect(chatData.payload.user.id));
                        break;
                    default:
                        return;
                }
            }, chatData.delta);
        });
    }
});

ChatInfos.propTypes = propTypes;
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInfos);
