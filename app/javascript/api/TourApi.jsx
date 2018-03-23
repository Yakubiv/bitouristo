import axios      from 'axios';
import RoutesURL from './Routes';

let API_URL = '';
if( process.env.REACT_APP_API_URL ) {
  API_URL = process.env.REACT_APP_API_URL;
}

const requests = {
  get: () => {
    return axios.get(API_URL + '/tours')
  }
};

const TourAPI = {
  getTours: () => {
    return requests.get(RoutesURL.get_tours(), {});
  }
};

export default TourAPI;
