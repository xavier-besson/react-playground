import DefaultAnimation from 'components/ui/animations/default';

/**
 * https://github.com/daneden/animate.css/tree/master/source
 * @class BounceInAnimation
 * @extends DefaultAnimation
 */
class BounceInAnimation extends DefaultAnimation {
		
	/**
	 * Animation name
	 * @type {String}
	 */
	name = 'bounceIn';
	
	/**
	 * Return the style content
	 * @method getStyle
	 * @return {String} The style content
	 */
	getStyle() {
		return `
		@keyframes ${this.classIdentifier} {
			from, 20%, 40%, 60%, 80%, to {
				animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			}

			0% {
				opacity: 0;
				transform: scale3d(.3, .3, .3);
			}

			20% {
				transform: scale3d(1.1, 1.1, 1.1);
			}

			40% {
				transform: scale3d(.9, .9, .9);
			}

			60% {
				opacity: 1;
				transform: scale3d(1.03, 1.03, 1.03);
			}

			80% {
				transform: scale3d(.97, .97, .97);
			}

			to {
				opacity: 1;
				transform: scale3d(1, 1, 1);
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

export default BounceInAnimation;
