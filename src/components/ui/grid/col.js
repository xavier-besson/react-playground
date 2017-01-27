import React from 'react';
import Default from 'components/ui/default';

/**
 * @class GridCol
 * @extends Default
 */
class GridCol extends Default {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Default.propTypes,
		standard: React.PropTypes.number,
		medium: React.PropTypes.number,
		small: React.PropTypes.number,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Default.defaultProps,
		default: 12,
		medium: 12,
		small: 12,
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
			children,
			className,
			standard,
			medium,
			small,
			...other
		} = this.props;
				
		const standardClassName = `${standard}u`;
		const mediumClassName = `${medium}u$(medium)`;
		const smallClassName = `${small}u$(small)`;
		const finalClassName = `${standardClassName} ${mediumClassName} ${smallClassName} ${className || ''}`;
		
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

export default GridCol;
