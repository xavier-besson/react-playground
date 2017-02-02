import DefaultAnimation from 'components/ui/animations/default';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class Bounce
 * @extends DefaultAnimation
 */
class Bounce extends DefaultAnimation {
		
	/**
	 * Animation identifier
	 * @type {String}
	 */
	static identifier = 'bounce';
	
	/**
	 * Return the style content
	 * @method getStyle
	 * @param {String} classIdentifier Associate class name
	 * @return {String} The style content
	 */
	static getStyle(classIdentifier) {
		return `
		@keyframes ${classIdentifier} {
			from, 20%, 53%, 80%, to {
				animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
				transform: translate3d(0,0,0);
			}

			40%, 43% {
				animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
				transform: translate3d(0, -30px, 0);
			}

			70% {
				animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
				transform: translate3d(0, -15px, 0);
			}

			90% {
				transform: translate3d(0,-4px,0);
			}
		}

		.${classIdentifier} {
			animation-name: ${classIdentifier};
			transform-origin: center bottom;
			animation-duration: 1s;
			animation-fill-mode: both;
		}
		`;
	}
	
}

export default Bounce;
