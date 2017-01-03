import React, {PropTypes} from 'react';
import Pure from 'components/pure';
import Link from 'components/ui/link';

/**
 * Class LayoutNav
 * @extends Default
 */ 
class LayoutNav extends Pure {
	
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
			<nav id="nav">
				<ul>
					<li>
						<Link to="/">
							Home
						</Link>
					</li>
					<li>
						<Link to="/uix">
							UI
						</Link>
					</li>
					
				</ul>
			</nav>
		);
	}
}

export default LayoutNav;
