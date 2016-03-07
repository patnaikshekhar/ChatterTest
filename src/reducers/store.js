import { createStore } from 'redux';
import {
  CREATE_CONNECTION,
  ERROR,
  SET_ACTIVE_CONNECTION,
  error,
  setActiveConnection
} from './actions';

import { dispatch } from 'redux';

const createConnection = () => {
  Electron.dispatch(action, function(err, conn) {
      // Got connection or error
      if (err) {
          dispatch(error(err));
      } else {
          dispatch(setActiveConnection(conn));
      }
  });

  return state;
}

function reducer(state = {}, action) {

    switch(action.type) {
      case CREATE_CONNECTION:
        return createConnection(state, action);

      case ERROR:
        return Object.assign({}, state, {
          error: action.message
        });

      case SET_ACTIVE_CONNECTION:
        return Object.assign({}, state, {
            activeConnection: action.message
        });

      default:
        return state;
    }
}

export default createStore(reducer)
