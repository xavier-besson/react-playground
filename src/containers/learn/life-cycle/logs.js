import {connect} from 'react-redux';
import {emptyLog} from 'actions/learn/life-cycle';
import LearnLifeCycleLogs from 'components/modules/learn/life-cycle/logs';

// Store state to props
const mapStateToProps = (state, ownProps) => ({
	items: state.logs,
});

// Store actions to props
const mapDispatchToProps = (dispatch, ownProps) => ({
	emptyLog: () => {
		dispatch(emptyLog());
	},
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(LearnLifeCycleLogs);
