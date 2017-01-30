import {connect} from 'react-redux';
import {addHuman} from 'actions/learn/life-cycle';
import LearnLifeCycleHumansControls from 'components/modules/learn/life-cycle/humans/controls';

// Store state to props
const mapStateToProps = (state, ownProps) => ({});

// Store actions to props
const mapDispatchToProps = (dispatch, ownProps) => ({
	onSave: (props) => {
		dispatch(addHuman(props));
	},
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LearnLifeCycleHumansControls);
