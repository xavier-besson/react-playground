export const addLog = (content) => ({
	type: 'ADD_LOG',
	content: content,
});

export const emptyLogs = (content) => ({
	type: 'EMPTY_LOGS',
});

export const addHuman = (props) => {
	if (props.get('name', '') !== '') {
		return {
			type: 'ADD_HUMAN',
			props: props,
		};
	}
	else {
		return {
			type: 'NONE',
		};
	}
};

export const killHuman = (index) => ({
	type: 'KILL_HUMAN',
	index: index,
});

export const giveRandomSuperPower = () => (dispatch, getState) => {
		
	const {
			humans,
		} = getState();
		
	const index = Math.floor(Math.random() * humans.size);

	dispatch({
		type: 'GIVE_RANDOM_SUPERPOWER_TO_HUMAN',
		index: index,
	});
};
