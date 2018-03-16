import React from 'react';
import { Link } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';

class Tours extends React.Component {
  constructor () {
    super();
    this.state = {
      tours: {}
    };
  }

  fetchTours () {
    axios.get( `api/tours` )
        .then(response => {
          this.setState({ tours: response.data });
        })
        .catch(error => {
          console.error(error);
        });
  }


  render () {
    console.log('hii');
    return (
      <div>
        Tours
      </div>
    );
  }
}

export default Tours;
