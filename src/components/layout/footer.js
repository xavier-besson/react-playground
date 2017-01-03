import React, {PropTypes} from 'react';
import Pure from 'components/pure';

/**
 * Class LayoutFooter
 * @extends Default
 */ 
class LayoutFooter extends Pure {
	
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
			children 
		} = this.props;
		
		return (
			<footer id="footer">
				<section>
					<h2>What is it?</h2>
					<p>
						A set of tests and proof of concept for React.
					</p>
				</section>
				<section>
					<h2>Contact</h2>
					<dl className="alt">
						<dt>Email</dt>
						<dd><a href="#">besson.xavier<b>[at]</b>gmail<b>[dot]</b>com</a></dd>
					</dl>
				</section>
				<p className="copyright">
					Design: <a href="https://html5up.net">HTML5 UP</a>.
				</p>
			</footer>
		);
	}
}

export default LayoutFooter;
