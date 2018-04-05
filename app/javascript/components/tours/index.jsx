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
      minPrice: 0,
      maxPrice: 10000,
      date: null
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

  _handleInputChange (name, value) {
    this.setState({
      [name]: value
    })
  }

  _searchFilter () {
    const { tours, minPrice, maxPrice, name, date } = this.state;
    let reg = new RegExp(name, "i");
    console.log(minPrice);
    let resultTours = tours.filter((item) => {
      if (item.name.match(reg, "i") && (item.price > minPrice) && (item.price < maxPrice)) {
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
    return this._searchFilter();
  }

  _currentToursComponent (component) {
    const componentList = {
      "ToursList": <ToursList
                      setComponent={this._setTourComponent}
                      tours={this._filteredTours()}
                      name={this.state.name}
                      maxPrice={this.state.maxPrice}
                      minPrice={this.state.minPrice}
                      date={this.state.date}
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
