import {IPlaylist} from '../../playlists/playlist.interface';
import {nested} from '../../../backbone/decorators/nested.decorator';
import {attributesKey} from '../../../backbone/decorators/attributes-key.decorator';
import {defaultValue} from '../../../backbone/decorators/default-value.decorator';
import {PlaylistSpotifyModel} from '../../playlists/playlists-spotify.model';
import {PlaylistItemSpotifyModel} from '../../playlists/playlist-item/playlist-item-spotify.model';
import {PlaylistItemsSpotifyCollection} from '../../playlists/playlist-item/playlist-items-spotify.collection';

export class AuthenticatedUserPlaylistSpotifyModel
  extends PlaylistSpotifyModel implements IPlaylist {

  @attributesKey('canEdit')
  @defaultValue(false)
  canEdit: boolean;

  @attributesKey('items')
  @nested()
  items: PlaylistItemsSpotifyCollection<PlaylistItemSpotifyModel>;
}
