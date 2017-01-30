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
	props: index,
});
