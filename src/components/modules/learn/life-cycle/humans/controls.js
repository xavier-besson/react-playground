import React from 'react';
import List from 'components/ui/list';
import Button from 'components/ui/button';

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
		giveRandomSuperPower: React.PropTypes.func.isRequired,
		visible: React.PropTypes.bool.isRequired,
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
			{
				content: (
					<Button
						onClick={this.props.giveRandomSuperPower}
						small
					>
						Give a random SuperPower to a random human
					</Button>
				),
			},
		];
		
		const content = this.props.visible ? (
			<List
				className="actions"
				items={actions}
			/>
		) : null;
		
		return content;
	}
}

export default LearnLifeCycleHumansControls;
