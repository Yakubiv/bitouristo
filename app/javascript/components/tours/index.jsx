import React from 'react';
import TourAPI from '../../api/TourApi';
import ToursList from './ToursList';
import Tour from './Tour';

class Tours extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoaded: false,
      tours: [],
      currentComponent: "ToursList",
      activeTourId: null
    }
    this._currentToursComponent = this._currentToursComponent.bind(this)
    this._setComponent = this._setComponent.bind(this)
  }

  componentWillMount () {
    TourAPI.getTours().then((res) => {
      console.log(res);
      this.setState ({
        isLoaded: true,
        tours: res.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  _setComponent (tourId) {
    this.setState({
      currentComponent: "Tour",
      activeTourId: tourId
    })
  }

  _setTour () {
    const { tours } = this.state.tours;
    console.log(this.state.activeTourId);
    return tours.find((item) => {return item.id == this.state.activeTourId});
  }

  _currentToursComponent (component) {
    const componentList = {
      "ToursList": <ToursList setComponent={this._setComponent} tours={this.state.tours} />,
      "Tour": <Tour tour={this._setTour()}/>
    }
    return componentList[component];
  }

  render () {
    if (!this.state.isLoaded) {
      return null;
    }
    return (
      <div>
        {this._currentToursComponent(this.state.currentComponent)}
      </div>
    );
  }
}

export default Tours;
