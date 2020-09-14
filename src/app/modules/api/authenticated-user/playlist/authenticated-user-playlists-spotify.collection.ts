import {IPlaylistModelConstructor} from '../../playlists/playlist.interface';
import {AuthenticatedUserPlaylistSpotifyModel} from './authenticated-user-playlist-spotify.model';
import {PlaylistSpotifyModel} from '../../playlists/playlists-spotify.model';
import {PlaylistsSpotifyCollection} from '../../playlists/playlists-spotify.collection';

export class AuthenticatedUserPlaylistsSpotifyCollection<TModel extends AuthenticatedUserPlaylistSpotifyModel>
  extends PlaylistsSpotifyCollection<PlaylistSpotifyModel> {

  model: IPlaylistModelConstructor = AuthenticatedUserPlaylistSpotifyModel;

  setEndpoint(id: string) {
    this.queryParams['account_id'] = id;
    this.endpoint = `/playlist/spotify`;
  }
}
