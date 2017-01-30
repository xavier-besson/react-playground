import DefaultAnimation from 'components/ui/animations/default';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class BounceOutAnimation
 * @extends DefaultAnimation
 */
class BounceOutAnimation extends DefaultAnimation {
		
	/**
	 * Animation name
	 * @type {String}
	 */
	name = 'bounceOut';
	
	/**
	 * Return the style content
	 * @method getStyle
	 * @return {String} The style content
	 */
	getStyle() {
		return `
		@keyframes ${this.classIdentifier} {
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

		.${this.classIdentifier} {
			animation-name: ${this.classIdentifier};
			animation-duration: 1s;
			animation-fill-mode: both;
		}
		`;
	}
	
}

export default BounceOutAnimation;
