import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class Login extends React.Component {
  render() {
    const { handleClick } = this.props
    return (
      <div className="text-center">
        <form className="form-signin">
          <h3 className="h3 mb-3 font-weight-normal">Bitouristo Login</h3>
          <TextField
            hintText="Email"
            errorText="Email is incorrect"
            floatingLabelText="Email"
          /><br />
          <TextField
            hintText="Password"
            errorText="Password"
            floatingLabelText="Passowrd"
          /><br />
          <RaisedButton label="Login" secondary={true} style={style} />
          <RaisedButton
            label="Sign up"
            secondary={true}
            style={style}
            onClick={() => handleClick('signUp')}/>
        </form>
      </div>
    );
  }
}

export default Login;
