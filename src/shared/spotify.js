export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";
const clientId = "b8f9db595ac54391b005a0dd606632a7";
// Permissions Requried
const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
    
    // "playlist-read-private",
    // "playlist-modify-private"
];

export const getTokenFromResponse = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
    }, {});
};

export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    '%20'
)}&response_type=token&show_dialog=true`;

// Auth Token: BQBq61pchDdSow_iklx8f6D1BsZI55eZtnm
// Authorization Token: BQB3U6E9e3edYnXcKKqwqb9zGmzfYW7hwUj7M4UuHA94PTdnjD9DJxaCIR4Pb3DCidTJlbxL2l4pgkLu0Dv9xn0FD6xpaoiyGeizu2NE6R1cZy8IX0O3RSLiVF98Jb9NjInRnvgfoipi18jS141LIKTLR9nSqLwGrq-Ht87Hn-Swx1YJPzM
// Client ID : b8f9db595ac54391b005a0dd606632a7