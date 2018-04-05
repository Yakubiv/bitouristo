import React from 'react';
import WrapperComponent from './WrapperComponent';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends React.Component {
  render () {
    return (
      <MuiThemeProvider>
        <WrapperComponent />
      </MuiThemeProvider>
    )
  }
}

export default App
