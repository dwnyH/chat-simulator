import React from 'react';
import './TopBar.css';

function TopBar() {
    return (
        <div className="topBar">
            <div className="menu">〓</div>
            <div className="icons">
                <div className="icon">ㅡ</div>
                <div className="icon">ㅁ</div>
                <div className="icon">X</div>
            </div>
        </div>
    );
}

export default TopBar;
