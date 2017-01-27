export const addLog = (content) => ({
	type: 'ADD_LOG',
	content: content,
});

export const emptyLog = (content) => ({
	type: 'EMPTY_LOG',
});

export const addHuman = (props) => {
	if (props.name !== '') {
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
