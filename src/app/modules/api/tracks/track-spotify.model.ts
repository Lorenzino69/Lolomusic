import {TrackAuxappModel} from './track-auxapp.model';
import {attributesKey} from '../../backbone/decorators/attributes-key.decorator';
import {defaultValue} from '../../backbone/decorators/default-value.decorator';

export class TrackSpotifyModel extends TrackAuxappModel {
  endpoint = '/track/spotify';

  @attributesKey('provider_id')
  @defaultValue('spotify')
  provider_id: string;

  clone() {
    return new TrackSpotifyModel(this.toMiniJSON());
  }
}
