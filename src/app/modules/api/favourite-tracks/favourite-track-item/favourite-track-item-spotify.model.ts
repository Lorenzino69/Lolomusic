import {IFavouriteTrackItem} from './favourite-track-item.interface';
import {PlaylistItemYoutubeModel} from '../../playlists/playlist-item/playlist-item-youtube.model';
import {PlaylistItemSpotifyModel} from '../../playlists/playlist-item/playlist-item-spotify.model';

export class FavouriteTrackItemSpotifyModel
  extends PlaylistItemSpotifyModel implements IFavouriteTrackItem {
}
