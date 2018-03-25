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
    this._setTourComponent = this._setTourComponent.bind(this)
    this._setToursComponent = this._setToursComponent.bind(this)
  }

  componentWillMount () {
    TourAPI.getTours().then((res) => {
      this.setState ({
        isLoaded: true,
        tours: res.data
      });
    }).catch((err) => {
      console.log(err);
    });
  }

  _setTourComponent (tourId) {
    this.setState({
      currentComponent: "Tour",
      activeTourId: tourId
    })
  }

  _setToursComponent () {
    this.setState({
      currentComponent: "ToursList",
      activeTourId: null
    })
  }

  _setTour () {
    const { tours } = this.state.tours;
    console.log(this.state.activeTourId);
    return tours.find((item) => {return item.id == this.state.activeTourId});
  }

  _currentToursComponent (component) {
    const componentList = {
      "ToursList": <ToursList setComponent={this._setTourComponent} tours={this.state.tours} />,
      "Tour": <Tour tour={this._setTour()} setComponent={this._setToursComponent}/>
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
