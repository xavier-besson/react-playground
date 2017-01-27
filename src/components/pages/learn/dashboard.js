import React from 'react';
import Page from 'components/page';
import Section from 'components/ui/section';
import Title from 'components/ui/title';
import Link from 'components/ui/link';
import List from 'components/ui/list';
import Text from 'components/ui/text';

/**
 * @class LearnDashboardPage
 * @extends Page
 */
class LearnDashboardPage extends Page {
	
	/**
	 * Meta properties that will be injected in the page
	 * @type {Object}
	 */
	meta = {
		title: 'React Playground - Learn',
		description: 'Let\'s learn React',
	};
	
	/**
	 * List of available sub pages
	 * @type {Array}
	 */
	subPagesListItems = [
		{
			content: (<Link to="/learn/life-cycle">Life cycle</Link>),
		},
		{
			content: '...others will come',
		},
	];
	
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
				<Title>Learn</Title>
				<Text>
					Choose what you want to learn about React in the list above:
				</Text>
				<List
					items={this.subPagesListItems}
				/>
			</Section>
		);
	}
}

export default LearnDashboardPage;
