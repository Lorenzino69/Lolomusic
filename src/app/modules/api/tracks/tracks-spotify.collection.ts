import {ITrackModelConstructor} from './track.interface';
import {TracksAuxappCollection} from './tracks-auxapp.collection';
import {queryParam} from '../../backbone/decorators/query-param.decorator';
import {TrackSpotifyModel} from './track-spotify.model';

export class TracksSpotifyCollection<TModel extends TrackSpotifyModel>
  extends TracksAuxappCollection<TModel> {

  @queryParam()
  provider_id = null;
  endpoint = '/track/spotify';
  model: ITrackModelConstructor = TrackSpotifyModel;

}
