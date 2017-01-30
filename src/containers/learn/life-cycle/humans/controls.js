import {connect} from 'react-redux';
import {giveRandomSuperPower} from 'actions/learn/life-cycle';
import LearnLifeCycleHumansControls from 'components/modules/learn/life-cycle/humans/controls';

// Store state to props
const mapStateToProps = (state, ownProps) => ({
	visible: state.humans.size > 0,
});

// Store actions to props
const mapDispatchToProps = (dispatch, ownProps) => ({
	giveRandomSuperPower: (props) => {
		dispatch(giveRandomSuperPower());
	},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnLifeCycleHumansControls);
