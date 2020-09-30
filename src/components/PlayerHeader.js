import React from 'react';
import './../assets/PlayerHeader.css';
import { useStateValue } from './../shared/StateProvider';
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";

function PlayerHeader({ spotify }) {
    const [{ user }] = useStateValue();

    return (
        <div className="playerHeader">
            <div className="header">
                <div className="header__left">
                    <SearchIcon />
                    <input
                        type="text"
                        placeholder="Search for Artists, Songs or Playlists" />
                </div>
                <div className="header__right">
                    <Avatar src={user?.images[0]?.url} alt="user?.display_name" />
                    <h4>{user?.display_name}</h4>
                </div>
            </div>
        </div>
    )
}

export default PlayerHeader;
