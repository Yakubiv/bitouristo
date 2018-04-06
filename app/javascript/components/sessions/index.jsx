import React from 'react';
import Login from './Login';
import SignUp from './SignUp';

class Sessions extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      email: '',
      password: '',
      passwordConfirmation: '',
      page: 'login'
    }

    this._handleClick = this._handleClick.bind(this)
  }

  _handleClick (value) {
    this.setState({
      page: value
    })
  }

  _renderComponent () {
    const components = {
      'login': <Login handleClick={this._handleClick} />,
      'signUp': <SignUp handleClick={this._handleClick} />
    }
    return components[this.state.page]
  }

  render () {
    return (
      <div>
        {this._renderComponent()}
      </div>
    )
  }
}

export default Sessions;
