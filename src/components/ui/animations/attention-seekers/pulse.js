import DefaultAnimation from 'components/ui/animations/default';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class Pulse
 * @extends DefaultAnimation
 */
class Pulse extends DefaultAnimation {
		
	/**
	 * Animation identifier
	 * @type {String}
	 */
	static identifier = 'pulse';
	
	/**
	 * Return the style content
	 * @method getStyle
	 * @param {String} classIdentifier Associate class name
	 * @return {String} The style content
	 */
	static getStyle(classIdentifier) {
		return `
		@keyframes ${classIdentifier} {
			from {
				transform: scale3d(1, 1, 1);
			}

			50% {
				transform: scale3d(1.05, 1.05, 1.05);
			}

			to {
				transform: scale3d(1, 1, 1);
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

export default Pulse;
