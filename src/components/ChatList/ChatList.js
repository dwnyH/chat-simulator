import React, { Component } from 'react';
import './ChatList.css';
import MessageConvert from '../MessageConvert';
import PropTypes from 'prop-types';

const propTypes = {
    users: PropTypes.object,
    messageText: PropTypes.array,
};

class ChatList extends Component {
    constructor(props) {
        super(props);
        this.scrollRef = React.createRef();
    }

    componentDidUpdate() {
        this.scrollRef.current.scrollTop = this.scrollRef.current.scrollHeight;
    }

    render() {
        const {messageText, users} = this.props;
        const chatList = messageText.map((message) => (
                <div className="chat" key={message.id}>
                    <div className="user">{users[message.userId].display_name}</div>
                    <div className="messageText">
                        <MessageConvert message={message.text} />
                    </div>
                </ div>
            ));

        return messageText.length
            ? (<div ref={this.scrollRef} className="chatContents">
                    {chatList}
                </div>
              )
            : (<div className="chatContents"></div>)
    }
}

ChatList.propTypes = propTypes;
export default ChatList;
