export const CREATE_CONNECTION = 'CREATE_CONNECTION';
export const ERROR = 'ERROR';
export const SET_ACTIVE_CONNECTION = 'SET_ACTIVE_CONNECTION';

export function createConnection() {
  return {
    type: CREATE_CONNECTION
  }
}

export function error(err) {
  return {
    type: ERROR,
    message: err
  }
}

export function setActiveConnection(conn) {
  return {
    type: SET_ACTIVE_CONNECTION,
    message: conn
  }
}
