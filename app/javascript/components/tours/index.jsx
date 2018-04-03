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
      activeTourId: null,
      name: '',
      price: ''
    }
    this._currentToursComponent = this._currentToursComponent.bind(this)
    this._setTourComponent = this._setTourComponent.bind(this)
    this._setToursComponent = this._setToursComponent.bind(this)
    this._handleInputChange = this._handleInputChange.bind(this)
  }

  componentWillMount () {
    TourAPI.getTours(this.state.name).then((res) => {
      this.setState ({
        isLoaded: true,
        tours: res.data.tours
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

  _handleInputChange (event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
  }

  _searchFilter = (value) => {
    const { tours } = this.state;
    let reg = new RegExp(this.state.name, "i");
    console.log(tours);
    let resultTours = tours.filter((item) => {
      if (item.name.match(reg, "i")) {
        return item;
      } else {
        return false;
      }
    })

    if (resultTours.length > 0) {
      return resultTours;
    } else {
      return [];
    }
  }

  _setTour () {
    const { tours } = this.state;

    if (tours.length > 0) {
      return tours.find((item) => {return item.id == this.state.activeTourId});
    } else {
      return false;
    }
  }

  _filteredTours () {
    return this._searchFilter(this.state.name);
  }

  _currentToursComponent (component) {
    const componentList = {
      "ToursList": <ToursList
                      setComponent={this._setTourComponent}
                      tours={this._filteredTours()}
                      name={this.state.name}
                      handleInputChange={this._handleInputChange} />,
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
