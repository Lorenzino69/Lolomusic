import {ITrackModelConstructor} from './track.interface';
import {TracksAuxappCollection} from './tracks-auxapp.collection';
import {TrackDeezerModel} from './track-deezer.model';
import {queryParam} from '../../backbone/decorators/query-param.decorator';

export class TracksSpotifyCollection<TModel extends TrackDeezerModel>
  extends TracksAuxappCollection<TModel> {

  @queryParam()
  provider_id = null;
  endpoint = '/track/spotify';
  model: ITrackModelConstructor = TrackDeezerModel;

}
