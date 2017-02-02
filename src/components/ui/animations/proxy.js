import React from 'react';
import ReactDOM from 'react-dom';
import BaseAnimation from 'components/ui/animations/index';

import BounceAnimation from 'components/ui/animations/attention-seekers/bounce';
import PulseAnimation from 'components/ui/animations/attention-seekers/pulse';
import BounceInDownAnimation from 'components/ui/animations/bouncing-entrances/bounce-in-down';
import BounceInAnimation from 'components/ui/animations/bouncing-entrances/bounce-in';
import BounceOutAnimation from 'components/ui/animations/bouncing-exits/bounce-out';

/**
 * Enumeration of available type for animation proxy component
 * @type {Object}
 */
export const ANIMATION_TYPE = {
	BOUNCE: BounceAnimation,
	PULSE: PulseAnimation,
	BOUNCE_IN_DOWN: BounceInDownAnimation,
	BOUNCE_IN: BounceInAnimation,
	BOUNCE_OUT: BounceOutAnimation,
};

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class ProxyAnimation
 * @extends BaseAnimation
 */
class ProxyAnimation extends BaseAnimation {
	
	/**
	 * React element reference
	 * @type {Element}
	 */
	reactElement = null;
		
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...BaseAnimation.propTypes,
		type: React.PropTypes.oneOf(Object.values(ANIMATION_TYPE)).isRequired,
	}
			
	/**
	 * Update the type of animation and the associate properties
	 * @method updateAndRun
	 * @param {Object} type The type of animation
	 * @return {void}
	 */
	updateAndRun(type) {
		type.init();
				
		return new Promise((resolve, reject) => {
			clearTimeout(this.animationTimeout);
			this.animationTimeout = setTimeout(() => {
				const oldClassName = this.props.type.classIdentifiers[this.props.type.identifier];
				const newClassName = type.classIdentifiers[type.identifier];

				this.domNode.classList.remove(oldClassName);
				const animatedEnd = () => {
					this.removeAnimationEndEvent(animatedEnd);
					this.domNode.classList.remove(newClassName);
					resolve();
				};
				
				this.addAnimationEndEvent(animatedEnd);
				this.domNode.classList.add(newClassName);
			});
		});
	}
	
	/**
	 * Run the animation
	 * @method run
	 * @return {Promise} A promise
	 */
	run() {
		return this.reactElement.run();
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
				
		return React.createElement(type, Object.assign(
			other,
			{
				ref: (element) => {
					this.reactElement = element;
					this.domNode = ReactDOM.findDOMNode(element);
				},
			}
		), children);
	}
}

export default ProxyAnimation;
