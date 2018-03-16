import React from 'react';

export default class SidebarComponent extends React.Component {
  render() {
    var data = this.props.items_list
    var itemsTemplate

    if (data.length > 0) {
      itemsTemplate = data.map((item, index) => {
        return (
          <li key={index} className="nav-item">
            <a className="nav-link" href="#">
              {item}
            </a>
          </li>
        );
      });
    } else {
      itemsTemplate = <p>No items fount</p>
    }

    return (
      <ul className="nav flex-column">
        <li className="nav-item">
          <span className="nav-link active" onClick={() => {this.props.setComponent('rewards')}}>
            Dashboard
          </span>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            Orders
          </a>
        </li>
        {itemsTemplate}
      </ul>
    )
  }
}
