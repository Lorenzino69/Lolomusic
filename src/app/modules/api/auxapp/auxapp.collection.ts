import {BaseCollection} from '../../backbone/collections/base.collection';
import {request} from '../../backbone/utils/request.util';
import {AuxappModel} from './auxapp.model';
import {environment} from '../../../../environments/environment';

export class AuxappCollection<TModel extends AuxappModel> extends BaseCollection<TModel> {

  model: any = AuxappModel;

  hostName(): string {
    return environment.httpApiUrl;
  }

  request(url: string, method: string, options: any = {}) {
    options.withCredentials = true;
    return request(url, method, options, this);
  }

  sync(method: string, model: any, options: any = {}) {
    options.withCredentials = true;
    return super.sync.call(this, method, model, options);
  }
}


