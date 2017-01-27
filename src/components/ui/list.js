import React from 'react';
import Default from 'components/ui/default';

/**
 * Enumeration of available tyle for list component
 * @type {Object}
 */
export const LIST_TYPE = {
	default: 'ul',
	ordered: 'ol',
};

/**
 * @class List
 * @extends Default
 */
class List extends Default {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Default.propTypes,
		type: React.PropTypes.oneOf(Object.keys(LIST_TYPE)),
		items: React.PropTypes.arrayOf(React.PropTypes.shape({
			content: React.PropTypes.node,
			props: React.PropTypes.object,
		})),
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Default.defaultProps,
		type: 'default',
		items: [],
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element.
	 * This element can be either a representation of a native DOM component,
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered.
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderItem
	 * @param {Object} item  The item object
	 * @param {Number} index The index of the item
	 * @return {Mixed}  A representation of a native DOM component
	 */
	renderItem(item, index = 0) {
		return (
			<li
				key={index}
				{...(item.props || {})}
			>
				{item.content}
			</li>
		);
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
		return this.props.items.map(this.renderItem);
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
		const {
			children, // eslint-disable-line
			items, // eslint-disable-line
			type,
			...other
		} = this.props;
		
		return React.createElement(LIST_TYPE[type], other, this.renderItems());
	}
}

export default List;
