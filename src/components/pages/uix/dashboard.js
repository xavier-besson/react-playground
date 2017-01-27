import React from 'react';
import Page from 'components/page';
import Section from 'components/ui/section';
import Title from 'components/ui/title';

/**
 * @class UixDashboardPage
 * @extends Page
 */
class UixDashboardPage extends Page {
	
	/**
	 * Meta properties that will be injected in the page
	 * @type {Object}
	 */
	meta = {
		title: 'React Playground - UI/UX',
		description: 'Let\'s play with React',
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
				<Title>UIX/Dashboard</Title>
			</Section>
		);
	}
}

export default UixDashboardPage;
