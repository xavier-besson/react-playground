import React from 'react';

import Section from 'components/ui/section';
import Quote from 'components/ui/quote';
import Title, {TITLE_TYPE} from 'components/ui/title';
import Bold from 'components/ui/bold';
import GridRow from 'components/ui/grid/row';
import GridCol from 'components/ui/grid/col';

import LearnLifeCycleLogsContainer from 'containers/learn/life-cycle/logs';
import LearnLifeCycleHumansAddFormContainer from 'containers/learn/life-cycle/humans/add-form';
import LearnLifeCycleHumansControlsContainer from 'containers/learn/life-cycle/humans/controls';
import LearnLifeCycleHumansListContainer from 'containers/learn/life-cycle/humans/list';

/**
 * @class LearnLifeCycleContainer
 * @extends React.Component
 */
class LearnLifeCycleContainer extends React.Component {
	
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
			<Section>
				<Quote>
					You are <Bold>GOD</Bold> (I know that's impressing), and here it's your playground, you can use your special abilities and as your are <Bold>omniscient</Bold> you have a direct access to the <Bold>life log</Bold>.
				</Quote>
				<GridRow>
					<GridCol
						standard={6}
					>
						<Title type={TITLE_TYPE.SUB}>Playground</Title>
						<LearnLifeCycleHumansAddFormContainer />
						<LearnLifeCycleHumansControlsContainer />
						<LearnLifeCycleHumansListContainer />
					</GridCol>
					<GridCol
						standard={6}
					>
						<Title type={TITLE_TYPE.SUB}>Life log</Title>
						<LearnLifeCycleLogsContainer />
					</GridCol>
				</GridRow>
			</Section>
		);
	}
}

export default LearnLifeCycleContainer;
