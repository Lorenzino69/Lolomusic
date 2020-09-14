import {IPlaylists} from './playlists.interface';
import {IPlaylistModelConstructor} from './playlist.interface';
import {PlaylistYoutubeModel} from './playlist-youtube.model';
import {AuxappCollection} from '../auxapp/auxapp.collection';

export class PlaylistsSpotifyCollection<TModel extends PlaylistYoutubeModel>
  extends AuxappCollection<TModel> implements IPlaylists<TModel> {

  endpoint = '/playlist/spotify';
  model: IPlaylistModelConstructor = PlaylistYoutubeModel;

}
