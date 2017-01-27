import React from 'react';
import Default from 'components/ui/default';

/**
 * @class Textbox
 * @extends Default
 */
class Textbox extends Default {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		...Default.propTypes,
		value: React.PropTypes.string,
		name: React.PropTypes.string,
		onChange: React.PropTypes.func,
	}

	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		...Default.defaultProps,
		value: '',
		name: '',
		onChange: null,
	}
	
	/**
	 * Range of validators that can be used to make sure the context data received is valid
	 * @type {Object}
	 */
	static contextTypes = {
		...Default.contextTypes,
		updateFormData: React.PropTypes.func,
	}
	
	/**
	* Reference to the input
	* @type {Element}
	*/
	inputRef = null;
	
	/**
	 * Value of the textbox
	 * @type {String}
	 */
	value = '';
	
	/**
	 * React method.
	 * Invoked immediately before mounting occurs.
	 * It is called before render(), therefore setting state in this method will not trigger a re-rendering.
	 * Avoid introducing any side-effects or subscriptions in this method.
	 * @method componentWillMount
	 * @return {void}
	 */
	componentWillMount() {
		this.updateValue(this.props);
	}
	
	/**
	 * React method.
	 * Invoked before rendering when new props or state are being received.
	 * Defaults to true.
	 * This method is not called for the initial render or when forceUpdate() is used.
	 * @method shouldComponentUpdate
	 * @param {Object} nextProps The next properties of the component
	 * @param {Object} nextState The next state of the component
	 * @return {void}
	 */
	shouldComponentUpdate(nextProps, nextState) {
		return true;
	}
	
	/**
	 * React method.
	 * Invoked before a mounted component receives new props.
	 * If you need to update the state in response to prop changes (for example, to reset it),
	 * you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
	 * @method componentWillReceiveProps
	 * @param {Object} nextProps The next properties of the component
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps, nextState) {
		const {
			value,
		} = nextProps;
				
		this.inputRef.value = value;
		this.updateValue(nextProps);
	}
	
	/**
	 * Update the value of the instance
	 * @method updateValue
	 * @param {Object} props Properties of the component
	 * @return {void}
	 */
	updateValue(props) {
		const {
			name,
			value,
		} = props;
		
		this.value = value;
		this.context.updateFormData(name, value);
	}
	
	/**
	 * Callback event when the texbox change
	 * @method onChange
	 * @param {Object} e Event object
	 * @return {void}
	 */
	onChange(e) {
		const {
			name,
			onChange,
		} = this.props;
		
		this.updateValue({
			value: this.inputRef.value,
			name: name,
		});
		
		if (onChange !== null) {
			onChange(e, this.valuevalue);
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
			children, // eslint-disable-line
			onChange, // eslint-disable-line
			value, // eslint-disable-line
			...other
		} = this.props;
					
		return (
			<input
				type="text"
				{...other}
				defaultValue={this.value}
				onChange={::this.onChange}
				ref={(ref) => {
					this.inputRef = ref;
				}}
			/>
		);
	}
}

export default Textbox;
