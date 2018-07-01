import { combineReducers } from 'redux';
import scanReducer from './scanReducer';

const rootReducer = combineReducers({
	scanReducer,
	});
export default rootReducer;
