import {IAuthenticatedUserAccount} from './authenticated-user-account.interface';
import {nested} from '../../../backbone/decorators/nested.decorator';
import {attributesKey} from '../../../backbone/decorators/attributes-key.decorator';
import {defaultValue} from '../../../backbone/decorators/default-value.decorator';
import {AuthenticatedUserPlaylistSpotifyModel} from '../playlist/authenticated-user-playlist-spotify.model';
import {AuthenticatedUserPlaylistsSpotifyCollection} from '../playlist/authenticated-user-playlists-spotify.collection';
import {FavouriteTracksSpotifyModel} from '../../favourite-tracks/favourite-tracks-spotify.model';
import {AccountSpotifyModel} from '../../account/account-spotify.model';

export class AuthenticatedUserAccountSpotifyModel
  extends AccountSpotifyModel implements IAuthenticatedUserAccount {
  public loginUrl = `${this.hostName()}/spotify`;

  @attributesKey('playlists')
  @nested()
  playlists: AuthenticatedUserPlaylistsSpotifyCollection<AuthenticatedUserPlaylistSpotifyModel>;

  @attributesKey('favouriteTracks')
  @nested()
  favouriteTracks: FavouriteTracksSpotifyModel;

  @attributesKey('connected')
  @defaultValue(false)
  connected: boolean;

  initialize(): void {
    if (this.id) {
      this.playlists.setEndpoint(this.id);
      this.favouriteTracks.setEndpoint(this.id);
    }
    this.on('change:id', () => {
      this.playlists.setEndpoint(this.id);
      this.favouriteTracks.setEndpoint(this.id);
    });
  }

  parse(attrs: any) {
    if (attrs.items && attrs.items.length > 0) {
      return super.parse(attrs.items[0]);
    } else {
      if (attrs.image) {
        attrs.image = {
          small: {url: attrs.image.small},
          medium: {url: attrs.image.medium},
          high: {url: attrs.image.large}
        };
      }
      return attrs;
    }
  }

  isConnected() {
    return this.connected && !this.isNew();
  }
}
