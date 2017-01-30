import React from 'react';
import Default from 'components/ui/default';

import BounceInDownAnimation from 'components/ui/animations/bouncing-entrances/bounce-in-down';
import BounceInAnimation from 'components/ui/animations/bouncing-entrances/bounce-in';
import BounceOutAnimation from 'components/ui/animations/bouncing-exits/bounce-out';

/**
 * Enumeration of available type for animation proxy component
 * @type {Object}
 */
export const ANIMATION_TYPE = {
	BOUNCE_IN_DOWN: BounceInDownAnimation,
	BOUNCE_IN: BounceInAnimation,
	BOUNCE_OUT: BounceOutAnimation,
};

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class ProxyAnimation
 * @extends Default
 */
class ProxyAnimation extends Default {
	
	state = {
		type: null,
		props: {},
	};
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Default.propTypes,
		type: React.PropTypes.oneOf(Object.values(ANIMATION_TYPE)).isRequired,
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
	 * Invoked immediately before mounting occurs.
	 * It is called before render(), therefore setting state in this method will not trigger a re-rendering.
	 * Avoid introducing any side-effects or subscriptions in this method.
	 * @method componentWillMount
	 * @return {void}
	 */
	componentWillMount() {
		this.setState({
			type: this.props.type,
		});
	}
	
	/**
	 * React method.
	 * Invoked before a mounted component receives new props.
	 * If you need to update the state in response to prop changes (for example, to reset it),
	  * you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
	 * @method componentWillReceiveProps
	 * @param {Object} nextProps The next properties of the component
	 * @param {Object} nextState The next state of the component
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps, nextState) {
		this.setState({
			type: nextProps.type,
		});
	}
	
	/**
	 * Update the type of animation and the associate properties
	 * @method updateAndRun
	 * @param {Object} type The type of animation
	 * @param {Object} props Component properties
	 * @return {void}
	 */
	updateAndRun(type, props = {}) {
		this.setState({
			type: type,
			props: props,
		});
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
			type,
			children,
			...other
		} = this.props;
				
		return React.createElement(this.state.type, Object.assign(other, this.state.props), children);
	}
}

export default ProxyAnimation;
