import Immutable from 'immutable';

const SUPER_POWERS = [
	'Draining life energy',
	'Detecting lies',
	'Seeing in the dark',
	'Coding with PERL',
	'Super hearing',
	'Seeing the future',
	'Super speed',
];

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
		return Immutable.List();
	default:
		return state;
	}
};

const human = (state, action) => {
	switch (action.type) {
	case 'ADD_HUMAN':
		return action.props;
	case 'GIVE_RANDOM_SUPERPOWER_TO_HUMAN': {
		const superpower = SUPER_POWERS[Math.floor(Math.random() * SUPER_POWERS.length)];

		return state.set('superpowers', state.get('superpowers', Immutable.List()).push(superpower));
	}
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
	case 'GIVE_RANDOM_SUPERPOWER_TO_HUMAN': {
		return state.set(action.index, human(state.get(action.index), action));
	}
	default:
		return state;
	}
};
