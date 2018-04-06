import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

class SignUp extends React.Component {
  render() {
    const { handleClick } = this.props
    return (
      <div className="text-center">
        <form className="form-signin">
          <h3 className="h3 mb-3 font-weight-normal">Bitouristo Signup</h3>
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
          <TextField
            hintText="Password Confirmation"
            errorText="Password Confirmation"
            floatingLabelText="Passowrd Confirmation"
          /><br />
          <RaisedButton
            label="Login"
            secondary={true}
            onClick={() => handleClick('login')}
            style={style} />
          <RaisedButton
            label="Sign up"
            secondary={true}
            style={style}
            onClick={() => handleClick('signUp')}/>
        </form>
      </div>
    )
  }
}

export default SignUp;
