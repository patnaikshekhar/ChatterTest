import { createStore } from 'redux';
import { CREATE_CONNECTION } from './actions';

function reducer(state = {}, action) {

    switch(action.type) {
      case CREATE_CONNECTION:
        console.log('Create connection called');
        return state;
      default:
        return state;
    }
}

export default createStore(reducer)
