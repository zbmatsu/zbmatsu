import axios from 'axios';

// --------------------------- Action constants --------------------------

// names for actions can be more specific
const QUERY_THEME = 'QUERY_THEME';
const QUERY_THEME_SUCCESS = 'QUERY_THEME_SUCCESS';
// if other components need to react to some action of current module - export corresponding action type
export const QUERY_THEME_FAIL = 'QUERY_THEME_FAIL';


// --------------------------- Action functions --------------------------

export function queryTheme() {
  return {
    types: [QUERY_THEME, QUERY_THEME_SUCCESS, QUERY_THEME_FAIL],
    promise: axios
      .get('http://localhost:8080/iov/Theme')
  };
}


// --------------------------- Reducer function --------------------------
const initialState = {
    list:[],
    pagination:{},
    obj:{}
};

export const theme = (state = initialState, action = {}) => {
    switch (action.type) {
        case QUERY_THEME_SUCCESS:
            let trans_data =  action.result.data.datas;
            return Object.assign({}, state, trans_data);
        default: return state;
    }
}
