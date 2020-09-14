import {attributesKey} from '../../backbone/decorators/attributes-key.decorator';
import {defaultValue} from '../../backbone/decorators/default-value.decorator';
import {nested} from '../../backbone/decorators/nested.decorator';
import {IPlaylist} from './playlist.interface';
import {PlaylistAuxappModel} from './playlist-auxapp.model';
import {PlaylistItemSpotifyModel} from './playlist-item/playlist-item-spotify.model';
import {PlaylistItemsSpotifyCollection} from './playlist-item/playlist-items-spotify.collection';

export class PlaylistSpotifyModel extends PlaylistAuxappModel implements IPlaylist {

  endpoint = '/playlist/spotify';

  @attributesKey('provider')
  @defaultValue('spotify')
  provider: string;

  @attributesKey('items')
  @nested()
  items: PlaylistItemsSpotifyCollection<PlaylistItemSpotifyModel>;
}
