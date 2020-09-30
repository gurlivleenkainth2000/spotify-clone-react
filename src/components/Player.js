import React from 'react';
import './../assets/Player.css';
import PlayerSidebar from './PlayerSidebar';
import PlayerBody from './PlayerBody';
import PlayerFooter from './PlayerFooter';

function Player({ spotify }) {
    return (
        <div className="player">
            <div className="player__body">
                <PlayerSidebar />
                <PlayerBody spotify={spotify} />
            </div>

            <PlayerFooter />
        </div>
    )
}

export default Player

// https://open.spotify.com/playlist/37i9dQZEVXcKCBwXUvfUUp?si=6vVbU9I0Q9SD_CWZU3Yvfw