import React, { useEffect } from 'react';
import './../assets/PlayerFooter.css';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
// import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
// import { useStateValue } from './../shared/StateProvider';
import { Grid, Slider } from "@material-ui/core";

function PlayerFooter() {
    // const [{ token, item, playing }, dispatch] = useStateValue();

    return (
        <div className="playerFooter">
            <div className="playerFooter__left">
                <img 
                    className="playerFooter__albumImage"
                    src="https://www.punjabisongtohindi.com/wp-content/img2/Ranjit_Bawa_Ik_Tara_Wala_Album.jpg" 
                    alt=""
                />
                <div className="playerFooter__albumInfo">
                    <h4>G.O.A.T</h4>
                    <p>Diljit Dosanjh</p>
                </div>
            </div>
            <div className="playerFooter__center">
                <ShuffleIcon className="playerFooter__green" />
                <SkipPreviousIcon className="playerFooter__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="playerFooter__icon" />
                <SkipNextIcon className="playerFooter__icon" />
                <RepeatIcon className="playerFooter__green" />
            </div>
            <div className="playerFooter__right">
                <Grid container spacing={2}>
                    <Grid item>
                        <PlaylistPlayIcon />
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon />
                    </Grid>
                    <Grid item xs>
                        <Slider aria-labelledby="continuous-slider" />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default PlayerFooter;
