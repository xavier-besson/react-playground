import React from 'react';
import CodeFormatted from 'components/ui/code-formatted';
import Button from 'components/ui/button';

/**
 * @class LearnLifeCycleLogs
 * @extends React.Component
 */
class LearnLifeCycleLogs extends React.Component {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		items: React.PropTypes.array.isRequired,
		emptyLog: React.PropTypes.func.isRequired,
	}
	
	/**
	 * @method onEmptyClick
	 * @param {Object} e Event object
	 * @return {void}
	 */
	onEmptyClick(e) {
		this.props.emptyLog();
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
		const {
			items,
		} = this.props;
		
		const content = items.join('\n');
		
		return (
			<div>
				<Button
					onClick={::this.onEmptyClick}
				>Empty</Button>
				<CodeFormatted
					style={{
						marginTop: '2em',
					}}
				>
					{content}
				</CodeFormatted>
			</div>
		);
	}
}

export default LearnLifeCycleLogs;
