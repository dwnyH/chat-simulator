import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../../actions';
import ChatList from '../../components/ChatList/ChatList';
import ChatUsers from '../../components/ChatUsers/ChatUsers';
import './ChatInfos.css'


class ChatInfos extends Component {
    async componentDidMount() {
        this.props.requestLists();
    }

    render() {
        return (
            <div className="main">
                <ChatUsers users={this.props.user} />
                <div className="chatContainer">
                    <ChatList messageText={this.props.message} users={this.props.user}/>
                    <div className="chatInput"></div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        message: Object.values(state.chatList.message),
        user: state.chatList.users
    }
}

const mapDispatchToProps = (dispatch) => ({
    requestLists: async() => {
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
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatInfos)
