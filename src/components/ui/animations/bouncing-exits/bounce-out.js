import DefaultAnimation from 'components/ui/animations/default';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class BounceOutAnimation
 * @extends DefaultAnimation
 */
class BounceOutAnimation extends DefaultAnimation {
		
	/**
	 * Animation identifier
	 * @type {String}
	 */
	static identifier = 'bounceOut';
	
	/**
	 * Return the style content
	 * @method getStyle
	 * @param {String} classIdentifier Associate class name
	 * @return {String} The style content
	 */
	static getStyle(classIdentifier) {
		return `
		@keyframes ${classIdentifier} {
			20% {
				transform: scale3d(.9, .9, .9);
			}

			50%, 55% {
				opacity: 1;
				transform: scale3d(1.1, 1.1, 1.1);
			}

			to {
				opacity: 0;
				transform: scale3d(.3, .3, .3);
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

export default BounceOutAnimation;
