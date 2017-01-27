import React from 'react';
import Default from 'components/ui/default';

/**
 * @class FlexContainer
 * @extends Default
 */
class FlexContainer extends Default {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Default.propTypes,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Default.defaultProps,
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
			children,
			style,
			...other
		} = this.props;
		
		return (
			<div
				style={{
					display: 'flex',
					...style,
				}}
				{...other}
			>
				{children}
			</div>
		);
	}
}

export default FlexContainer;
