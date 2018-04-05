import React from 'react';
import TextField from 'material-ui/TextField';
import Slider from 'material-ui/Slider';
import DatePicker from 'material-ui/DatePicker';

class ToursFilter extends React.Component {
  render () {
    const { name, handleInputChange, minPrice, maxPrice, date } = this.props

    return (
      <div>
        <TextField
          hintText="Serch tours"
          value={name}
          onChange={(e, v) => handleInputChange(e.target.name, v) }
          name="name"
        />
        
        <DatePicker
          hintText="Select date"
          value={date}
          onChange={(e, v) => handleInputChange('date', v)}
        />
        <div className="row">
          <div className="col-sm-3">
            <label>Min price: {minPrice}$</label>
            <Slider
              min={0}
              max={10000}
              step={5}
              value={minPrice}
              onChange={(e, v) => handleInputChange('minPrice', v) }
            />
          </div>

          <div className="col-sm-3">
            <label>Max price: {maxPrice}$</label>
            <Slider
              min={0}
              max={10000}
              step={5}
              value={maxPrice}
              onChange={(e, v) => handleInputChange('maxPrice', v) }
            />
          </div>
        </div>

        <hr/>
      </div>
    );
  }
}

export default ToursFilter;
