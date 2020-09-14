import {FavouriteTrackItemYoutubeModel} from './favourite-track-item-youtube.model';
import {IFavouriteTrackItems} from './favourite-track-items.interface';
import {PlaylistItemYoutubeModel} from '../../playlists/playlist-item/playlist-item-youtube.model';
import {PlaylistItemsYoutubeCollection} from '../../playlists/playlist-item/playlist-items-youtube.collection';
import {IFavouriteTrackItem} from './favourite-track-item.interface';
import {PlaylistItemSpotifyModel} from '../../playlists/playlist-item/playlist-item-spotify.model';
import {PlaylistItemsSpotifyCollection} from '../../playlists/playlist-item/playlist-items-spotify.collection';

export class FavouriteTrackItemsSpotifyCollection<TModel extends FavouriteTrackItemYoutubeModel>
  extends PlaylistItemsSpotifyCollection<PlaylistItemSpotifyModel> implements IFavouriteTrackItems<IFavouriteTrackItem> {

  model = FavouriteTrackItemYoutubeModel;

  setEndpoint(favouriteId: string) {
    this.endpoint = `favourite/spotify/${favouriteId}/item`;
  }
}
