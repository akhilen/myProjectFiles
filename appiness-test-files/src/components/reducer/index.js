import { combineReducers } from 'redux';
import { loginReducer } from './reducer'

const rootReducers = combineReducers({
   input:loginReducer,
})

export default rootReducers;