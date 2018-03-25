import React from 'react';
import SidebarComponent from '../components/SidebarComponent';
import MainComponent from '../components/MainComponent';
import Tours from '../components/tours';
import Rewards from '../components/rewards';
import Dashboard from '../components/dashboard';
import Images from '../components/images';
import Settings from '../components/settings';

export default class DashboardComponent extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentComponent: 'Dashboard'
    }

    this._setComponent = this._setComponent.bind(this)
  }

  componentDidMount () {
    console.log(this.state.currentComponent);
  }

  _setComponent (component) {
    this.setState ({
      currentComponent: component
    })
    localStorage.setItem('currentComponent', component)
  }

  _selectComponent (component) {
    const availableComponent = {
      "Dashboard": <Dashboard />,
      "Images": <Images />,
      "Settings": <Settings />,
      "Tours": <Tours />,
      "Rewards": <Rewards />
    }
    return availableComponent[component]
  }

  _activeComponent () {
    if (localStorage.getItem('currentComponent') === null) {
      return this.state.currentComponent;
    } else {
      return localStorage.getItem('currentComponent');
    }
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap">
              <a className="nav-link -no-border" href="#">Sign out</a>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2 d-none d-md-block bg-light sidebar">
              <div className="sidebar-sticky">
                <SidebarComponent items_list={['Tours', 'Rewards', 'Images', 'Settings']} setComponent={this._setComponent} activeComponent={this.state.currentComponent}/>
              </div>
            </div>
            <main className="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
              {this._selectComponent(this._activeComponent())}
            </main>
          </div>
        </div>
      </div>
    );
  }
}
