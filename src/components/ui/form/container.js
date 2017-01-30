import React from 'react';
import Default from 'components/ui/default';
import Immutable from 'immutable';

/**
 * @class FormContainer
 * @extends Default
 */
class FormContainer extends Default {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Default.propTypes,
		onSubmit: React.PropTypes.func,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Default.defaultProps,
		onSubmit: null,
	}
	
	/**
	 * Range of validators that can be used to make sure the context data sent to the children is valid
	 * @type {Object}
	 */
	static childContextTypes = {
		...Default.childContextTypes,
		updateFormData: React.PropTypes.func,
	}
	
	/**
	 * All form data
	 * @type {Object}
	 */
	formData = Immutable.Map();
	
	/**
	 * Return the context object for the component's children
	 * @method getChildContext
	 * @return {Object} The context destinated to children
	 */
	getChildContext() {
		return {
			updateFormData: ::this.updateFormData,
		};
	}
	
	/**
	 * Update a value of the form in the data source
	 * @method updateFormData
	 * @param {String|Array} key   Key of the data to set the value
	 * @param {Mixed}  value Value to set
	 * @return {void}
	 */
	updateFormData(key, value) {
		const finalKey = Array.isArray(key) ? key : [key];

		this.formData = this.formData.setIn(finalKey, value);
	}
	
	/**
	 * Callback event when the form is submited
	 * @method onSubmit
	 * @param {Object} e Event object
	 * @return {void}
	 */
	onSubmit(e) {
		const {
			onSubmit,
		} = this.props;
		
		e.preventDefault();
		
		if (onSubmit !== null) {
			onSubmit(this.formData);
		}
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
			onSubmit, // eslint-disable-line
			...other
		} = this.props;
			
		return (
			<form
				onSubmit={::this.onSubmit}
				{...other}
			>
				{children}
			</form>
		);
	}
}

export default FormContainer;
