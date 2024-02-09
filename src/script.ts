import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import AuthorizationCodeWithPKCEStrategy from "@spotify/web-api-ts-sdk";

const implicitGrantStrategy = new SpotifyApi.AuthorizationCodeWithPKCEStrategy(
    import.meta.env.VITE_SPOTIFY_CLIENT_ID,
    import.meta.env.VITE_REDIRECT_TARGET,
    ['user-read-private', 'user-read-email', 'playlist-modify-public', 'playlist-modify-private, user-read-playback-state, user-modify-playback-state']
);