import React from 'react';
import ToursFilter from './ToursFilter';

class ToursList extends React.Component {
  _noTours () {
    return (
      <div>
        No tours found
      </div>
    );
  }
  _displayTours () {
    const { tours, setComponent } = this.props
    if (tours.length === 0) {
      return this._noTours();
    }
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
                ${item.price}
              </p>
              <p className="card-text">
                <span className="fa fa-location-arrow m-r"></span>
                {item.places.map((item, index) => {
                  return <span key={index} className="location-item">{item}</span>
                })}
              </p>
            </div>
          </div>
        </div>
      );
    })
  }

  render () {
    return (
      <div>
        <ToursFilter
          name={this.props.name}
          handleInputChange={this.props.handleInputChange} />
        <div className="row">
          {this._displayTours()}
        </div>
      </div>
    );
  }
}

export default ToursList;
