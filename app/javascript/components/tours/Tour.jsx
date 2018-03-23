import React from 'react';

class Tour extends React.Component {
  render () {
    const { tour } = this.props

    if (!tour) { return null};
    return (
      <div className="card">
        <img className="card-img-top" src={tour.cover} />
        <div className="card-body">
          <h5 className="card-title">{tour.name}</h5>
          <p className="card-text">
            <span className="fa fa-calendar m-r"></span>
            {tour.date}
          </p>
          <p className="card-text">
            <span className="fa fa-flag m-r"></span>
            {tour.status}
          </p>
          <p className="card-text">
            <span className="fa fa-money-bill-alt m-r"></span>
            {tour.price}
          </p>
          <p className="card-text">
            <span className="fa fa-location-arrow m-r"></span>
            {tour.places}
          </p>
        </div>
      </div>
    );
  }
}

export default Tour;
