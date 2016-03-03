import React from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import { connect } from 'react-redux';
import { createConnection } from '../reducers/actions';

const LoginTemplate = (props) => {
  return (
    <div>
      <RaisedButton label="Create Connection" primary={true} onMouseUp={props.onCreateConnection} />
    </div>
  )
};

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch) => ({
  onCreateConnection: () => {
    dispatch(createConnection())
  }
});

const Login = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginTemplate)

export default Login;
