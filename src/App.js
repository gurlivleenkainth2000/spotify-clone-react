import React, { useEffect } from 'react';
import './App.css';
import Login from './components/Login';
import { getTokenFromResponse } from './shared/spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './components/Player';
import { useStateValue } from './shared/StateProvider';
import * as actionTypes from './shared/actionTypes';

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: actionTypes.SET__TOKEN,
        token: _token,
      })

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: actionTypes.SET__USER,
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: actionTypes.SET__PLAYLISTS,
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcKCBwXUvfUUp").then((response) => {
        // console.log(response);
        dispatch({
          type: actionTypes.SET__DISCOVER_WEEKLY,
          discover_weekly: response,
        });
      });

      spotify.getMyTopArtists().then((top_artists) => {
        dispatch({
          type: actionTypes.SET__TOP_ARTISTS,
          top_artists: top_artists
        })
      });

      dispatch({
        type: actionTypes.SET__SPOTIFY,
        spotify: spotify,
      });
    }
  }, [token, dispatch]);

  return (
    <div className="app">
      {
        token ? ( <Player spotify={spotify} /> ) : ( <Login /> )
      }
    </div>
  );
}

export default App;