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
          <a className="nav-link active" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            Dashboard
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path><polyline points="13 2 13 9 20 9"></polyline></svg>
            Orders
          </a>
        </li>
        {itemsTemplate}
      </ul>
    )
  }
}
