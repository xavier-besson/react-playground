import React, {PropTypes} from 'react';
import Pure from 'components/pure';
import {Link as RouterLink} from 'react-router';
import RouterManager from 'utils/router-manager';

/**
 * Class Link
 * @extends Pure
 */ 
class Link extends Pure {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		to: PropTypes.string,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		to: '',
	}
	
	/**
	 * Permit to check if we need a real link or a router link.
	 * The test is done on the `to` property
	 * @method isReal
	 * @return {Boolean}  True if it's a real link, false if it's a router link
	 */
	isReal() {
		const {
			to,
		} = this.props;
		
		return to.startsWith('//') || to.startsWith('http://') || to.startsWith('https://');
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element. 
	 * This element can be either a representation of a native DOM component, 
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered. 
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderRealLink
	 * @return {Mixed}  A representation of a native DOM component	 
	 */
	renderRealLink() {
		const {
			children,
			to,
			...other
		} = this.props;
		
		return (
			<a
				href={to}
				{...other}
			>
				{children}
			</a>
		);
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element. 
	 * This element can be either a representation of a native DOM component, 
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered. 
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderRouterLink
	 * @return {Mixed}  A representation of a native DOM component	 
	 */
	renderRouterLink() {
		const {
			children,
			to,
			...other
		} = this.props;
		
		return (
			<RouterLink
				to={to}
				{...other}
			>
				{children}
			</RouterLink>
		);
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
			to 
		} = this.props;
		
		return this.isReal() ? this.renderRealLink() : this.renderRouterLink();
	}
}

export default Link;
