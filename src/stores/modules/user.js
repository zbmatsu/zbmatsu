import axios from 'axios';

// --------------------------- Action constants --------------------------

// names for actions can be more specific
const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
// if other components need to react to some action of current module - export corresponding action type
export const LOGIN_FAIL = 'LOGIN_FAIL';


// --------------------------- Action functions --------------------------

export function login() {
  return {
    types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
    promise: axios
      .get('http://localhost:8080/fms-cfs/Enterprises')
  };
}


// --------------------------- Reducer function --------------------------
const initialState = {
  list:[],
  pagination:{}
};

export const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      let trans_data =  action.result.data.data;
      return Object.assign({}, state, trans_data);
    default: return state;
  }
}
