import React, { Component } from 'react';
import './ChatList.css';
import MessageConvert from '../MessageConvert';
import PropTypes from 'prop-types';

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        this.myRef.current.scrollTop = this.myRef.current.scrollHeight;
    }

    render() {
        const users = this.props.users;
        const chatList = this.props.messageText.map((message) => (
                    <div className="chat" key={message.id}>
                        <div className="user">{users[message.userId].display_name}</div>
                        <div className="messageText">
                            <MessageConvert message={message.text} />
                        </div>
                    </ div>
                ));

        return this.props.messageText.length
            ? (
                <div ref={this.myRef} className="chatContents">
                    {chatList}
                </div>
            )
            : (
                <div className="chatContents"></div>
            )
    }
}

export default ChatList;