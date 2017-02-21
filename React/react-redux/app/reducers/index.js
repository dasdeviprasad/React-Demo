import {combineReducers} from 'redux';
import users from './users';

const reducer = combineReducers({
    users: users
});

export default reducer;