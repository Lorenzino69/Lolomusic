import {IPlaylistItem} from './playlist-item.interface';
import {attributesKey} from '../../../backbone/decorators/attributes-key.decorator';
import {nested} from '../../../backbone/decorators/nested.decorator';
import {PlaylistItemAuxappModel} from './playlist-item-auxapp.model';
import {TrackSpotifyModel} from '../../tracks/track-spotify.model';

export class PlaylistItemSpotifyModel
  extends PlaylistItemAuxappModel implements IPlaylistItem {
  public type = 'spotify';

  @attributesKey('track')
  @nested()
  track: TrackSpotifyModel;
}
