import { environment } from '@core/environment';
import axios from 'axios';

const baseService = axios.create({
  baseURL: environment.apiRootUrl,
});

// Where you would set stuff like your 'Authorization' header, etc ...
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

export { baseService };