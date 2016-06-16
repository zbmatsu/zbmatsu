import axios from 'axios';

// --------------------------- Action constants --------------------------

// names for actions can be more specific
const LOAD_MENU = 'LOAD_MENU';
const LOAD_MENU_SUCCESS = 'LOAD_MENU_SUCCESS';
// if other components need to react to some action of current module - export corresponding action type
export const LOAD_MENU_FAIL = 'LOAD_MENU_FAIL';


// --------------------------- Action functions --------------------------

export function loadMenu() {
  return {
    types: [LOAD_MENU, LOAD_MENU_SUCCESS, LOAD_MENU_FAIL],
    promise: axios
      .get('http://172.21.38.31:8090/fms-cfs/cfs/menu/2')
  };
}


// --------------------------- Reducer function --------------------------
const initialState = {
  list:[],
  pagination:{}
};

export const menu = (state = initialState, action = {}) => {
  switch (action.type) {
    case LOAD_MENU_SUCCESS:
      let trans_data =  action.result.data.data;
      return Object.assign({}, state, trans_data);
    default: return state;
  }
}
