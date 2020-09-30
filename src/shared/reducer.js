import * as actionTypes from './actionTypes';

export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    spotify: null,
    discover_weekly: null,
    top_artists: null,
    // token: null,
    // token: "BQBRTf2kJodrSAb2pLqYkO6NP6yzNCTceq9D4QiYcA-n1Ul08IPRiwkTWTDD2LQcP7En3noexbVtljvr5I-RvEn3ThXL49o62kl4PfZpfR1f0wcseFesBBuUv8j6uJuPqx_XXd2RFGVDI92PVDW4rFqHTl-PBqTSx9DXSuj-vesL-x36"
};

const reducer = (state, action) => {
    switch(action.type) {
        case actionTypes.SET__USER:
            return { 
                ...state ,
                user: action.user,
            }

        case actionTypes.SET__TOKEN:
            return {
                ...state,
                token: action.token,
            }
        
        case actionTypes.SET__PLAYLISTS:
            return {
                ...state,
                playlists: action.playlists,
            }
        
        case actionTypes.SET__PLAYING:
            return {
                ...state,
                playing: action.playing,
            }

        case actionTypes.SET__ITEM:
            return {
                ...state,
                item: action.item,
            }

        case actionTypes.SET__SPOTIFY:
            return {
                ...state,
                spotify: action.spotify,
            }
        
        case actionTypes.SET__DISCOVER_WEEKLY:
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        
        case actionTypes.SET__TOP_ARTISTS:
            return {
                ...state,
                top_artists: action.top_artists,
            }

        default:
            return state;
    }
}

export default reducer;