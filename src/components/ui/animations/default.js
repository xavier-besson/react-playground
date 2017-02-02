import React from 'react';
import BaseAnimation from 'components/ui/animations/index';
import LayoutManager from 'utils/layout-manager.js';
import * as Uid from 'utils/uid';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class DefaultAnimation
 * @extends BaseAnimation
 */
class DefaultAnimation extends BaseAnimation {
	
	/**
	 * Instance of the LayoutManager
	 * Permit to easily manage the DOM
	 * @type {LayoutManager}
	 */
	layoutManager = null;
			
	/**
	 * Animation identifier
	 * @type {String}
	 */
	static identifier = 'default';
	
	/**
	 * Cached class ientifiers
	 * @type {Object}
	 */
	static classIdentifiers = {};
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...BaseAnimation.propTypes,
		wrapper: React.PropTypes.string,
		onFinish: React.PropTypes.func,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...BaseAnimation.defaultProps,
		wrapper: 'span',
		onFinish: null,
	}
	
	/**
	 * Initialize the animation component, inject the CSS if needed
	 * @method init
	 * @return {void}
	 */
	static init() {
		if (!this.classIdentifiers[this.identifier]) {
			this.classIdentifiers[this.identifier] = Uid.get('animation_');
			LayoutManager.getInstance().injectStyleTag(this.getStyle(this.classIdentifiers[this.identifier]));
		}
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
		this.constructor.init();
	}
	
	/**
	 * React method.
	 * Invoked immediately after a component is mounted.
	 * Initialization that requires DOM nodes should go here.
	 * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
	 * Setting state in this method will trigger a re-rendering.
	 * @method componentDidMount
	 * @return {void}
	 */
	componentDidMount() {
		this.addAnimationEndEvent(::this.onAnimationEnd);
	}
	
	/**
	 * React method.
	 * Invoked immediately before a component is unmounted and destroyed.
	 * Perform any necessary cleanup in this method, such as invalidating timers,
	 * canceling network requests, or cleaning up any DOM elements that were created in componentDidMount
	 * @method componentWillUnmount
	 * @return {void}
	 */
	componentWillUnMount() {
		this.removeAnimationEndEvent(::this.onAnimationEnd);
	}
	
	/**
	 * Return the style content
	 * @method getStyle
	 * @return {String} The style content
	 */
	static getStyle() {
		return '';
	}
	
	/**
	 * Call the onFinish property when the animation ended
	 * @method onAnimationEnd
	 * @return {void}
	 */
	onAnimationEnd() {
		const {
			onFinish,
		} = this.props;
		
		this.domNode.classList.remove(this.constructor.classIdentifiers[this.constructor.identifier]);
						
		if (onFinish !== null) {
			onFinish();
		}
	}
	
	/**
	 * External API function to run the animation
	 * @method run
	 * @return {Promise} A promise
	 */
	run() {
		return new Promise((resolve, reject) => {
			clearTimeout(this.animationTimeout);
			this.animationTimeout = setTimeout(() => {
				const className = this.constructor.classIdentifiers[this.constructor.identifier];
				const animatedEnd = () => {
					this.removeAnimationEndEvent(animatedEnd);
					this.domNode.classList.remove(className);
					resolve();
				};

				this.addAnimationEndEvent(animatedEnd);
				this.domNode.classList.add(className);
			});
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
			children,
			className,
			wrapper,
			onFinish,
			...other
		} = this.props;
		
		const finalClassName = `${className} ${this.constructor.classIdentifiers[this.constructor.identifier]}`;
		const props = {
			...other,
			ref: (domNode) => {
				this.domNode = domNode;
			},
			className: finalClassName,
		};
		
		return React.createElement(wrapper, props, children);
	}
}

export default DefaultAnimation;
