import React from 'react';
import Default from 'components/ui/default';

/**
 * @class GridRow
 * @extends Default
 */
class GridRow extends Default {
	
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
			children,
			className,
			...other
		} = this.props;
		
		const finalClassName = `row uniform ${className || ''}`;
		
		return (
			<div
				className={finalClassName}
				{...other}
			>
				{children}
			</div>
		);
	}
}

export default GridRow;
