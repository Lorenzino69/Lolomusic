import {IAccount} from './account.interface';
import {attributesKey} from '../../backbone/decorators/attributes-key.decorator';
import {nested} from '../../backbone/decorators/nested.decorator';
import {defaultValue} from '../../backbone/decorators/default-value.decorator';
import {PlaylistDeezerModel} from '../playlists/playlist-deezer.model';
import {PlaylistsDeezerCollection} from '../playlists/playlists-deezer.collection';
import {AuxappModel} from '../auxapp/auxapp.model';
import {ImageAuxappModel} from '../image/image-auxapp.model';
import {TrackDeezerModel} from '../tracks/track-deezer.model';
import {TracksDeezerCollection} from '../tracks/tracks-deezer.collection';

export class AccountDeezerModel extends AuxappModel implements IAccount {
  endpoint = '/account';

  @attributesKey('provider_id')
  @defaultValue('deezer')
  provider: string;

  @attributesKey('image')
  @nested()
  image: ImageAuxappModel;

  @attributesKey('title')
  @defaultValue('')
  title: string;

  @attributesKey('playlists')
  @nested()
  playlists: PlaylistsDeezerCollection<PlaylistDeezerModel>;

  @attributesKey('tracks')
  @nested()
  tracks: TracksDeezerCollection<TrackDeezerModel>;

  getFullName(): string {
    return this.title;
  }
}
