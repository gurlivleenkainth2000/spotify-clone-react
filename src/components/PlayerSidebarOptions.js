import React from 'react';
import './../assets/PlayerSidebarOptions.css';

function PlayerSidebarOptions({ title, Icon }) {
    return (
        <div className="playerSidebarOptions">
            { Icon ? <Icon style={{ fontSize: 48 }} className="playerSidebarOptions__icon" /> : null }
            { Icon ? <h4>{title}</h4> : <p>{title}</p> }
        </div>
    )
}

export default PlayerSidebarOptions;
