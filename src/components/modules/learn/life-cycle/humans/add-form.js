import React from 'react';
import FlexContainer from 'components/ui/flex/container';
import FlexItem from 'components/ui/flex/item';
import Button from 'components/ui/button';
import FormContainer from 'components/ui/form/container';
import Textbox from 'components/ui/form/textbox';

/**
 * @class LearnLifeCycleHumansAddForm
 * @extends React.Component
 */
class LearnLifeCycleHumansAddForm extends React.Component {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		onSave: React.PropTypes.func.isRequired,
	}
	
	/**
	 * Callback event when the form is submited
	 * @method onSubmit
	 * @param {Object} formData The form data
	 * @return {void}
	 */
	onSubmit(formData) {
		this.props.onSave(formData);
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
			<FormContainer
				onSubmit={::this.onSubmit}
			>
				<FlexContainer>
					<FlexItem>
						<Textbox
							name="name"
							placeholder="Your new human name"
						/>
					</FlexItem>
					<FlexItem
						grow={0}
					>
						<Button type="submit">Create your human</Button>
					</FlexItem>
				</FlexContainer>
			</FormContainer>
		);
	}
}

export default LearnLifeCycleHumansAddForm;
