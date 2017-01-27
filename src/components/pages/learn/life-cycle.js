import React from 'react';
import Page from 'components/page';
import Section from 'components/ui/section';
import Title from 'components/ui/title';
import Link from 'components/ui/link';
import Text from 'components/ui/text';
import ModulesLearnLifeCycle from 'components/modules/learn/life-cycle';

/**
 * @class LearnLifeCyclePage
 * @extends Page
 */
class LearnLifeCyclePage extends Page {
	
	/**
	 * Meta properties that will be injected in the page
	 * @type {Object}
	 */
	meta = {
		title: 'React Playground - Learn / Life cylce',
		description: 'Let\'s learn React. How is working the component\'s life cycle ',
	};
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element.
	 * This element can be either a representation of a native DOM component,
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered.
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderContent
	 * @return {Mixed}  A representation of a native DOM component
	 */
	renderContent() {
		return (
			<Section>
				<Text>
					<Link to="">&lt; Go back to the Learn dashboard</Link>
				</Text>
				<Title>Learn / Life cycle</Title>
				<Text>
					The example above is about the life cycle of React:
					<br />
					How components are created and updated?
				</Text>
				<ModulesLearnLifeCycle />
			</Section>
		);
	}
}

export default LearnLifeCyclePage;
