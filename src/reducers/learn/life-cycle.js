import Immutable from 'immutable';

const log = (state, action) => {
	switch (action.type) {
	case 'ADD_LOG':
		return action.content;
	default:
		return state;
	}
};

export const logs = (state = Immutable.List(), action) => {
	switch (action.type) {
	case 'ADD_LOG':
		return state.push(log(null, action));
	case 'EMPTY_LOGS':
		return [];
	default:
		return state;
	}
};

const human = (state, action) => {
	switch (action.type) {
	case 'ADD_HUMAN':
		return action.props;
	default:
		return state;
	}
};

export const humans = (state = Immutable.List(), action) => {
	switch (action.type) {
	case 'ADD_HUMAN': {
		return state.push(human(null, action));
	}
	case 'KILL_HUMAN': {
		return state.delete(action.index);
	}
	default:
		return state;
	}
};
