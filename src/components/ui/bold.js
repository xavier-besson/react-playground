import React from 'react';
import Default from 'components/ui/default';

/**
 * @class Bold
 * @extends Default
 */
class Bold extends Default {
	
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
			style,
			...other
		} = this.props;
		
		return (
			<span
				style={{
					fontWeight: 'bold',
					...style,
				}}
				{...other}
			>
				{children}
			</span>
		);
	}
}

export default Bold;
