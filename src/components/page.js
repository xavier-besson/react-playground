import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import LayoutManager from 'utils/layout-manager';
import RouterManager from 'utils/router-manager';
import LayoutHeader from 'components/layout/header';
import LayoutNav from 'components/layout/nav';
import LayoutFooter from 'components/layout/footer';

/**
 * Class Page
 * @extends React.Component
 */ 
class Page extends React.Component {
	
	/**
	 * Instance of the RouterManager
	 * Permit to easily manage the router
	 * @type {RouterManager}
	 */
	routerManager = null;
	
	/**
	 * Instance of the LayoutManager
	 * Permit to easily manage the DOM
	 * @type {LayoutManager}
	 */
	layoutManager = null;
		
	/**
	 * Meta properties that will be injected in the page
	 * @type {Object}
	 */
	meta = {
		title: '',
		description: '',
	};
	
	/**
	 * Css files that will be inject in the the page
	 * @type {Array}
	 */
	cssFiles = [
		'assets/css/main.css'
	];
	
	/**
	 * React method.
	 * Invoked immediately before mounting occurs. 
	 * It is called before render(), therefore setting state in this method will not trigger a re-rendering. 
	 * Avoid introducing any side-effects or subscriptions in this method.
	 * @method componentWillMount
	 * @return {void}	 
	 */
	componentWillMount() {
		this.routerManager = RouterManager.forge(this.props.router);
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
		this.initLayout();
	}
	
	/**
	 * Initialization of the layout
	 * @method initLayout
	 * @
	 * return {void}
	 */
	initLayout() {
		this.layoutManager = LayoutManager.forge(ReactDOM.findDOMNode(this.refs.root));
		this.layoutManager.setMetaInDom(this.meta).injectCssFiles(this.cssFiles);
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element. 
	 * This element can be either a representation of a native DOM component, 
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered. 
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderHeader
	 * @return {Mixed}  A representation of a native DOM component	 
	 */
	renderHeader() {
		return (
			<LayoutHeader></LayoutHeader>
		);
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element. 
	 * This element can be either a representation of a native DOM component, 
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered. 
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderNav
	 * @return {Mixed}  A representation of a native DOM component	 
	 */
	renderNav() {
		return (
			<LayoutNav></LayoutNav>
		);
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element. 
	 * This element can be either a representation of a native DOM component, 
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered. 
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderHeader
	 * @return {Mixed}  A representation of a native DOM component	 
	 */
	renderContent() {
		return null;
	}
	
	/**
	 * Sub rendering method called by the render method.
	 * Return a single React element. 
	 * This element can be either a representation of a native DOM component, 
	 * such as <div />, or another composite component that you've defined yourself.
	 * You can also return null or false to indicate that you don't want anything rendered. 
	 * When returning null or false, ReactDOM.findDOMNode(this) will return null.
	 * @method renderHeader
	 * @return {Mixed}  A representation of a native DOM component	 
	 */
	renderFooter() {
		return (
			<LayoutFooter></LayoutFooter>
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
			<div 
				id="wrapper"
				ref="root"
			>
				{this.renderHeader()}
				{this.renderNav()}
				<div id="main">
					{this.renderContent()}
				</div>
				{this.renderFooter()}
			</div>
		);
	}
}

export default Page;
