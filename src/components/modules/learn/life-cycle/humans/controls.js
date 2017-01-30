import React from 'react';
import List from 'components/ui/list';

/**
 * @class LearnLifeCycleHumansControls
 * @extends React.Component
 */
class LearnLifeCycleHumansControls extends React.Component {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		addLog: React.PropTypes.func.isRequired,
		killHuman: React.PropTypes.func.isRequired,
	}
			
	/**
	 * React method.
	 * Return a single React element.
	 * This element can be either a representation of a native DOM component,
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered.
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method render
	 * @return {Mixed}  A representation of a native DOM component
	 */
	render() {
		const actions = [
			
		];
		
		return (
			<List
				items={actions}
			/>
		);
	}
}

export default LearnLifeCycleHumansControls;
