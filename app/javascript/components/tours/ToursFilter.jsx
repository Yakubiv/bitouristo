import React from 'react';

class ToursFilter extends React.Component {
  render () {
    const { name, handleInputChange } = this.props

    return (
      <div>
        <form>
          <input
            placeholder="Search tour.."
            value={name}
            onChange={(e) => handleInputChange(e) }
            name="name"
          />
        </form>
        <hr/>
      </div>
    );
  }
}

export default ToursFilter;
