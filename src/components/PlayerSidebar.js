import React from 'react';
import './../assets/PlayerSidebar.css';
import PlayerSidebarOptions from './PlayerSidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import { useStateValue } from './../shared/StateProvider';

function PlayerSidebar() {
    const [{ playlists }] = useStateValue();
    return (
        <div className="playerSidebar">
            <img
                className="playerSidebar__logo"
                src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
                alt=""
            />
            <PlayerSidebarOptions Icon={HomeIcon} title="Home" />
            <PlayerSidebarOptions Icon={SearchIcon} title="Search" />
            <PlayerSidebarOptions Icon={LibraryMusicIcon} title="Your Library" />
            <br />
            <strong className="playerSidebar__title">PLAYLISTS</strong>
            <hr />
            {
                playlists?.items?.map((playlist) => (
                    <PlayerSidebarOptions title={playlist.name} key={playlist.id} />
                ))
            }
            {/*  */}
        </div>
    )
}

export default PlayerSidebar;
