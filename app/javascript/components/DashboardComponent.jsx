import React from 'react';
import SidebarComponent from '../components/SidebarComponent';
import MainComponent from '../components/MainComponent';

export default class DashboardComponent extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link" href="#">Sign out</a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <SidebarComponent items_list={['Tours', 'Rewards', 'Images']}/>
              </div>
            </div>
            <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              <MainComponent />
            </main>
          </div>
        </div>
      </div>
    );
  }
}
