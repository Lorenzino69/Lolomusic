import {IAccount} from './account.interface';
import {attributesKey} from '../../backbone/decorators/attributes-key.decorator';
import {nested} from '../../backbone/decorators/nested.decorator';
import {defaultValue} from '../../backbone/decorators/default-value.decorator';
import {AuxappModel} from '../auxapp/auxapp.model';
import {ImageAuxappModel} from '../image/image-auxapp.model';
import {PlaylistSpotifyModel} from '../playlists/playlists-spotify.model';
import {PlaylistsSpotifyCollection} from '../playlists/playlists-spotify.collection';
import {TrackSpotifyModel} from '../tracks/track-spotify.model';
import {TracksSpotifyCollection} from '../tracks/tracks-spotify.collection';

export class AccountSpotifyModel extends AuxappModel implements IAccount {

  endpoint = '/account';

  @attributesKey('provider_id')
  @defaultValue('spotify')
  provider: string;

  @attributesKey('image')
  @nested()
  image: ImageAuxappModel;

  @attributesKey('title')
  @defaultValue('')
  title: string;

  @attributesKey('playlists')
  @nested()
  playlists: PlaylistsSpotifyCollection<PlaylistSpotifyModel>;

  @attributesKey('tracks')
  @nested()
  tracks: TracksSpotifyCollection<TrackSpotifyModel>;

  getFullName(): string {
    return this.title;
  }
}
