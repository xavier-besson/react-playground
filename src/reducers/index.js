import {combineReducers} from 'redux';
import * as learnLifeCycleReduces from './learn/life-cycle';

const appReducers = combineReducers({
	...learnLifeCycleReduces,
});

export default appReducers;
