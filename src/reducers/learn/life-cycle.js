const log = (state, action) => {
	switch (action.type) {
	case 'ADD_LOG':
		return action.content;
	default:
		return state;
	}
};

export const logs = (state = [], action) => {
	switch (action.type) {
	case 'ADD_LOG':
		return [
			...state,
			log(null, action),
		];
	case 'EMPTY_LOG':
		return [];
	default:
		return state;
	}
};

const human = (state, action) => {
	switch (action.type) {
	case 'ADD_HUMAN':
		return Object.assign({}, action.props);
	default:
		return state;
	}
};

export const humans = (state = [], action) => {
	switch (action.type) {
	case 'ADD_HUMAN': {
		const newState = state.slice(0);
		
		newState.push(human(null, action));
		return newState;
	}
	case 'KILL_HUMAN': {
		const newState = state.slice(0);
		
		newState.splice(action.index, 1);

		return newState;
	}
	default:
		return state;
	}
};
