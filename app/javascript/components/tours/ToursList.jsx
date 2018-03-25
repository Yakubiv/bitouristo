import React from 'react';
import ToursFilter from './ToursFilter';

class ToursList extends React.Component {
  _displayTours () {
    const { tours } = this.props.tours
    const { setComponent } = this.props
    return tours.map((item, index) => {
      return (
        <div className="col-sm-3" key={index}>
          <div className="card">
            <img src={item.cover} className="card-img-top" />
            <div className="card-body">
              <h5 className="card-title" onClick={() => setComponent(item.id)}>{item.name}</h5>
              <p className="card-text">
                <span className="fa fa-calendar m-r"></span>
                {item.date}
              </p>
              <p className="card-text">
                <span className="fa fa-flag m-r"></span>
                {item.status}
              </p>
              <p className="card-text">
                <span className="fa fa-money-bill-alt m-r"></span>
                {item.price}
              </p>
              <p className="card-text">
                <span className="fa fa-location-arrow m-r"></span>
                {item.places}
              </p>
            </div>
          </div>
        </div>
      );
    })
  }

  render () {
    if (this.props.tours.lenght === 0) {
      return null;
    }
    return (
      <div>
        <ToursFilter />
        <div className="row">
          {this._displayTours()}
        </div>
      </div>
    );
  }
}

export default ToursList;
