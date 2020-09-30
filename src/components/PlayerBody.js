import React from 'react';
import './../assets/PlayerBody.css';
import PlayerHeader from './PlayerHeader';
import SongRow from './SongRow';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useStateValue } from './../shared/StateProvider';

function PlayerBody({ _spotify }) {
    const [{ discover_weekly, spotify }] = useStateValue();

    const onTrackSelect = (id) => {
        let trackList = discover_weekly.tracks.items;
        let trackInfo = trackList.find(obj => obj.track.id === id).track;
        console.log(trackInfo);

        spotify.play({
            uris: [`spotify:track:${id}`]
        })
        .then((res) => console.log(res))
    };
    
    return (
        <div className="playerBody">
            <PlayerHeader spotify={spotify} />
            <div className="playerBody__info">
                <img src={discover_weekly?.images[0].url} alt="" />
                <div className="playerBody__infoText">
                    <strong>PLAYLIST</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>
            <div className="playerBody__songs">
                <div className="playerBody__icons">
                    <PlayCircleFilledIcon
                        className="playerBody__shuffle"
                    />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>
                {
                    discover_weekly?.tracks.items.map((item) => (
                        <SongRow key={item.track.id} track={item.track} onTrackSelect={onTrackSelect} />
                    ))
                }
            </div>
        </div>
    )
}

export default PlayerBody;

