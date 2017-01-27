import React from 'react';
import Pure from 'components/pure';

/**
 * @class Default
 * @extends Pure
 */
class Default extends Pure {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Pure.propTypes,
		style: React.PropTypes.object,
		className: React.PropTypes.string,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Pure.defaultProps,
		style: {},
		className: '',
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
		return null;
	}
}

export default Default;
