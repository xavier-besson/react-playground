import React from 'react';
import Button from 'components/ui/button';

/**
 * @class LearnLifeCycleHumansItem
 * @extends React.Component
 */
class LearnLifeCycleHumansItem extends React.Component {
	
	/**
	 * Default state of the component
	 * @type {Object}
	 */
	state = {
		age: 0,
	};
	
	/**
	 * Range of validators that can be used to make sure the data you receive is valid
	 * @type {Object}
	 */
	static propTypes = {
		id: React.PropTypes.number.isRequired,
		name: React.PropTypes.string.isRequired,
		friendsNumber: React.PropTypes.number.isRequired,
		addLog: React.PropTypes.func.isRequired,
		onKill: React.PropTypes.func.isRequired,
	}
	
	/**
	 * React method.
	 * Invoked immediately before mounting occurs.
	 * It is called before render(), therefore setting state in this method will not trigger a re-rendering.
	 * Avoid introducing any side-effects or subscriptions in this method.
	 * @method componentWillMount
	 * @return {void}
	 */
	componentWillMount() {
		this.addLog('componentWillMount (birth start)');
	}
	
	/**
	 * React method.
	 * Invoked immediately after a component is mounted.
	 * Initialization that requires DOM nodes should go here.
	 * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
	 * Setting state in this method will trigger a re-rendering.
	 * @method componentDidMount
	 * @return {void}
	 */
	componentDidMount() {
		this.addLog('componentDidMount (birth done)');
	}
	
	/**
	 * React method.
	 * Invoked before a mounted component receives new props.
	 * If you need to update the state in response to prop changes (for example, to reset it),
	  * you may compare this.props and nextProps and perform state transitions using this.setState() in this method.
	 * @method componentWillReceiveProps
	 * @param {Object} nextProps The next properties of the component
	 * @param {Object} nextState The next state of the component
	 * @return {void}
	 */
	componentWillReceiveProps(nextProps, nextState) {
		this.addLog('componentWillReceiveProps (receive information/skill)');
		if (this.props.friendsNumber < nextProps.friendsNumber) {
			this.addLog(`Win a friend (${nextProps.friendsNumber})`);
		}
	}
	
	/**
	 * React method.
	 * Invoked immediately before rendering when new props or state are being received.
	 * Use this as an opportunity to perform preparation before an update occurs.
	 * This method is not called for the initial render.
	 * @method componentWillUpdate
	 * @param {Object} nextProps The next properties of the component
	 * @param {Object} nextState The next state of the component
	 * @return {void}
	 */
	componentWillUpdate(nextProps, nextState) {
		this.addLog('componentWillUpdate (treat information/skill)');
	}
	
	/**
	 * React method.
	 * invoked immediately after updating occurs.
	 * This method is not called for the initial render.
	 * @method componentDidUpdate
	 * @param {Object} prevProps The previous properties of the component
	 * @param {Object} prevState The previous state of the component
	 * @return {void}
	 */
	componentDidUpdate(prevProps, prevState) {
		this.addLog('componentDidUpdate (gain information/skill)');
	}
	
	/**
	 * React method.
	 * Invoked immediately before a component is unmounted and destroyed.
	 * Perform any necessary cleanup in this method, such as invalidating timers,
	 * canceling network requests, or cleaning up any DOM elements that were created in componentDidMount
	 * @method componentWillUnmount
	 * @return {void}
	 */
	componentWillUnmount() {
		this.addLog('componentWillUnmount (die)');
	}
	
	/**
	 * Add a log
	 * @method addLog
	 * @param {String} content The log content
	 * @return {void}
	 */
	addLog(content) {
		this.props.addLog(`Human "${this.props.name}": ${content}`);
	}
	
	/**
	 * Celebrate the birthday
	 * @method happyBirthday
	 * @return {void}
	 */
	happyBirthday() {
		this.addLog('');
		this.addLog('this.setState is executed');
		this.setState({
			age: this.state.age + 1,
		});
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
			name,
		} = this.props;
		
		const {
			age,
		} = this.state;
				
		return (
			<div
				style={{
					border: 'solid 1px #ccc',
					padding: '20px',
					borderRadius: '5px',
					marginBottom: '15px',
				}}
			>
				{name}
				<br />
				Age: {age}
				<br />
				<Button
					onClick={::this.happyBirthday}
				>
					Celebrate my birthday
				</Button>
				<Button
					onClick={this.props.onKill.bind(this.props.id)}
				>
					Kill him
				</Button>
			</div>
		);
	}
}

export default LearnLifeCycleHumansItem;