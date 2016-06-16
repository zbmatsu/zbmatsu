import { combineReducers } from 'redux';

import {user} from './user';
import {theme} from './theme';
import {menu} from './menu';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
    routing: routerReducer,
    user,
    theme,
    menu
});
