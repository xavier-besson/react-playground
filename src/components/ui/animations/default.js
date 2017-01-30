import React from 'react';
import Default from 'components/ui/default';
import LayoutManager from 'utils/layout-manager.js';
import * as Uid from 'utils/uid';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class DefaultAnimation
 * @extends Default
 */
class DefaultAnimation extends Default {
	
	/**
	 * Animation name
	 * @type {String}
	 */
	name = null;
	
	/**
	 * Animation timeout, avoid repetition
	 * @type {Number}
	 */
	animationTimeout = null;
	
	/**
	 * Instance of the LayoutManager
	 * Permit to easily manage the DOM
	 * @type {LayoutManager}
	 */
	layoutManager = null;
	
	/**
	 * The class identifier
	 * @type {String}
	 */
	classIdentifier = null;
	
	/**
	 * DOM node reference
	 * @type {Element}
	 */
	domNode = null;
	
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
		...Default.propTypes,
		wrapper: React.PropTypes.string,
		onFinish: React.PropTypes.func,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Default.defaultProps,
		wrapper: 'span',
		onFinish: null,
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
		if (!this.constructor.classIdentifiers[this.name]) {
			this.constructor.classIdentifiers[this.name] = Uid.get('animation_');
			this.classIdentifier = this.constructor.classIdentifiers[this.name];
			this.layoutManager = LayoutManager.getInstance();
			this.layoutManager.injectStyleTag(this.getStyle());
		}
		else {
			this.classIdentifier = this.constructor.classIdentifiers[this.name];
		}
		
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
	 * Add a callback on animationend
	 * @method addAnimationEndEvent
	 * @param {Function} callback The callback to executed
	 * @return {void}
	 */
	addAnimationEndEvent(callback) {
		this.domNode.addEventListener('webkitAnimationEnd', callback, false);
		this.domNode.addEventListener('animationend', callback, false);
		this.domNode.addEventListener('oanimationend', callback, false);
		this.domNode.addEventListener('mozAnimationEnd', callback, false);
		this.domNode.addEventListener('MSAnimationEnd', callback, false);
	}
	
	/**
	 * Remove the callback on animationend
	 * @method removeAnimationEndEvent
	 * @param {Function} callback The callback to executed
	 * @return {void}
	 */
	removeAnimationEndEvent(callback) {
		this.domNode.removeEventListener('webkitAnimationEnd', callback, false);
		this.domNode.removeEventListener('animationend', callback, false);
		this.domNode.removeEventListener('oanimationend', callback, false);
		this.domNode.removeEventListener('mozAnimationEnd', callback, false);
		this.domNode.removeEventListener('MSAnimationEnd', callback, false);
	}
	
	/**
	 * Return the style content
	 * @method getStyle
	 * @return {String} The style content
	 */
	getStyle() {
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
						
		if (onFinish !== null) {
			onFinish();
		}
	}
	
	/**
	 * External API function to run the animation
	 * @method runAnimation
	 * @return {Promise} A promise
	 */
	runAnimation() {
		return new Promise((resolve, reject) => {
			clearTimeout(this.animationTimeout);
			this.animationTimeout = setTimeout(() => {
				this.domNode.classList.remove(this.classIdentifier);
				setTimeout(() => {
					const animatedEnd = () => {
						resolve();
						this.removeAnimationEndEvent(animatedEnd);
					};

					this.addAnimationEndEvent(animatedEnd);
					this.domNode.classList.add(this.classIdentifier);
				}, 50);
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
		
		const finalClassName = `${className} ${this.classIdentifier}`;
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
