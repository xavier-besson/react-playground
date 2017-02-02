import DefaultAnimation from 'components/ui/animations/default';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class BounceInDownAnimation
 * @extends DefaultAnimation
 */
class BounceInDownAnimation extends DefaultAnimation {
		
	/**
	 * Animation identifier
	 * @type {String}
	 */
	static identifier = 'bounceInDown';
		
	/**
	 * Return the style content
	 * @method getStyle
	 * @param {String} classIdentifier Associate class name
	 * @return {String} The style content
	 */
	static getStyle(classIdentifier) {
		return `
		@keyframes ${classIdentifier} {
			from, 60%, 75%, 90%, to {
				animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			}

			0% {
				opacity: 0;
				transform: translate3d(0, -3000px, 0);
			}

			60% {
				opacity: 1;
				transform: translate3d(0, 25px, 0);
			}

			75% {
				transform: translate3d(0, -10px, 0);
			}

			90% {
				transform: translate3d(0, 5px, 0);
			}

			to {
				transform: none;
			}
		}

		.${classIdentifier} {
			animation-name: ${classIdentifier};
			animation-duration: 1s;
			animation-fill-mode: both;
		}
		`;
	}
	
}

export default BounceInDownAnimation;
