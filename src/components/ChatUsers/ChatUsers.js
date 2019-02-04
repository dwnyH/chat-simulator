import React, {Componet} from 'react';
import './ChatUsers.css';

function ChatUsers(props) {
    const chatUsers = Object.values(props.users).map(member => {
        return (
            <div className={member.connected? "connected" : " "} key={member.id}>
                {member.user_name}
            </div>
        );
    });

    return (
        <div className="chatUserContainer">
            <div className="userProfile">ken</div>
            <div className="chatMember">
            {Object.keys(props.users).length
                ? chatUsers
                : null}
            </div>
        </div>
    );
}

export default ChatUsers;
