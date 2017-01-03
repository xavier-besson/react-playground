import React, {PropTypes} from 'react';
import Pure from 'components/pure';

/**
 * Class LayoutHeader
 * @extends Default
 */ 
class LayoutHeader extends Pure {
	
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
			<header 
				id="header" 
				className="alt"
			>
				<span className="logo">
					<img src="assets/images/logo.svg" alt="" />
				</span>
				<h1>React-Playground</h1>
				<p>
					Time to play with React! 
					<br />
					Enjoy!
				</p>
			</header>
		);
	}
}

export default LayoutHeader;
