import React from 'react';
import LearnLifeCycleHumansItem from './item';
import Immutable from 'immutable';

/**
 * @class LearnLifeCycleHumansList
 * @extends React.Component
 */
class LearnLifeCycleHumansList extends React.Component {
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		humans: React.PropTypes.instanceOf(Immutable.List),
		addLog: React.PropTypes.func.isRequired,
		killHuman: React.PropTypes.func.isRequired,
	}
	
	/**
	 * Default values for props property
	 * @type {Object}
	 */
	static defaultProps = {
		humans: Immutable.List(),
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element.
	 * This element can be either a representation of a native DOM component,
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered.
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderHuman
	 * @param {Object} human Human properties
	 * @param {Number} index Index of the human
	 * @return {Mixed}  A representation of a native DOM component
	 */
	renderHuman(human, index) {
		return (
			<LearnLifeCycleHumansItem
				id={index}
				name={human.get('name')}
				superpowers={human.get('superpowers')}
				key={index}
				addLog={this.props.addLog}
				killMe={() => {
					this.props.killHuman(index);
				}}
				friendsNumber={this.props.humans.size - 1}
			/>
		);
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
			<div>
				{this.props.humans.map(::this.renderHuman)}
			</div>
		);
	}
}

export default LearnLifeCycleHumansList;
