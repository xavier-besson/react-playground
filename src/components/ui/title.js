import React from 'react';
import Default from 'components/ui/default';

/**
 * Enumeration of available type for title component
 * @type {Object}
 */
export const TITLE_TYPE = {
	MAIN: 'h1',
	DEFAULT: 'h2',
	SUB: 'h3',
	INFO: 'h4',
};

/**
 * @class Title
 * @extends Default
 */
class Title extends Default {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Default.propTypes,
		type: React.PropTypes.oneOf(Object.values(TITLE_TYPE)),
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Default.defaultProps,
		type: TITLE_TYPE.SUB,
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
			type,
			...other
		} = this.props;
		
		return React.createElement(type, other, children);
	}
}

export default Title;
