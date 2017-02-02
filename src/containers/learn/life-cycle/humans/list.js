import {connect} from 'react-redux';
import {addLog, killHuman, updateHumanProperties} from 'actions/learn/life-cycle';
import LearnLifeCycleHumansList from 'components/modules/learn/life-cycle/humans/list';

// Store state to props
const mapStateToProps = (state, ownProps) => ({
	humans: state.humans,
});

// Store actions to props
const mapDispatchToProps = (dispatch, ownProps) => ({
	addLog: (content) => {
		dispatch(addLog(content));
	},
	killHuman: (index) => {
		dispatch(killHuman(index));
	},
	updateHumanProperties: (index, properties) => {
		dispatch(updateHumanProperties(index, properties));
	},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnLifeCycleHumansList);
