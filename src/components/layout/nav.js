import React, {PropTypes} from 'react';
import Pure from 'components/pure';
import Link from 'components/ui/link';
import RouterManager from 'utils/router-manager';

/**
 * @class LayoutNav
 * @extends Default
 */
class LayoutNav extends Pure {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		items: PropTypes.array,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		items: [],
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element.
	 * This element can be either a representation of a native DOM component,
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered.
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderItems
	 * @return {Mixed}  A representation of a native DOM component
	 */
	renderItems() {
		const {
			items,
		} = this.props;
				
		return items.map((item, index) => {
			const currentPathName = RouterManager.getInstance().getCurrentPathName();
			const className = (currentPathName === item.path || currentPathName.startsWith(`${item.path}/`)) ? 'active': '';
			
			return (
				<li
					key={index}
				>
					<Link
						to={item.path}
						className={className}
					>
						{item.key}
					</Link>
				</li>
			);
		});
	}
	
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
		return (
			<nav id="nav">
				<ul>
					{this.renderItems()}
				</ul>
			</nav>
		);
	}
}

export default LayoutNav;
