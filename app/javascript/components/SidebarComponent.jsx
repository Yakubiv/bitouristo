import React from 'react';

export default class SidebarComponent extends React.Component {

  _selectClass(item) {
    return this.props.activeComponent === item ? 'active' : '';
  }

  _setIcon(item) {
    const listIcons = {
      "Dashboard": 'fa fa-suitcase',
      "Images": 'fa fa-camera',
      "Settings": 'fa fa-cogs',
      "Tours": 'fa fa-subway',
      "Rewards": 'fa fa-trophy'
    }
    return listIcons[item]
  }

  render() {
    var data = this.props.items_list;
    var itemsTemplate

    if (data.length > 0) {
      itemsTemplate = data.map((item, index) => {
        return (
          <li key={index} className="nav-item">
            <a className={`nav-link ${this._selectClass(item)}`} onClick={() => {this.props.setComponent(item)}}>
              <i className={this._setIcon(item)}></i>
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
          <a className={`nav-link ${this._selectClass('Dashboard')}`} onClick={() => {this.props.setComponent('Dashboard')}}>
            <i className={this._setIcon('Dashboard')}></i>
            Dashboard
          </a>
        </li>
        {itemsTemplate}
      </ul>
    )
  }
}
