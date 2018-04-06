import React from 'react';
import WrapperComponent from './WrapperComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sessions from '../components/sessions';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <Sessions />
        {/* <WrapperComponent /> */}
      </MuiThemeProvider>
    )
  }
}

export default App
