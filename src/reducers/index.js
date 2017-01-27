import {combineReducers} from 'redux';
import emptyReducer from './empty';
import * as learnLifeCycleReduces from './learn/life-cycle';

const appReducers = combineReducers({
	emptyReducer,
	...learnLifeCycleReduces,
});

export default appReducers;
