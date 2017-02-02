import Default from 'components/ui/default';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class BaseAnimation
 * @extends Default
 */
class BaseAnimation extends Default {

	/**
	 * DOM node reference
	 * @type {Element}
	 */
	domNode = null;
		
	/**
	 * Animation timeout, avoid repetition
	 * @type {Number}
	 */
	animationTimeout = null;
	
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
}

export default BaseAnimation;
