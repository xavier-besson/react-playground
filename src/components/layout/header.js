import React from 'react';
import Pure from 'components/pure';
import Title, {TITLE_TYPE} from 'components/ui/title';
import Text from 'components/ui/text';

/**
 * @class LayoutHeader
 * @extends Pure
 */
class LayoutHeader extends Pure {
		
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
		} = this.props;

		return (
			<header
				id="header"
				className="alt"
			>
				<span className="logo">
					<img
						src="/assets/images/logo.svg"
						alt=""
					/>
				</span>
				<Title
					type={TITLE_TYPE.MAIN}
				>React-Playground</Title>
				<Text>
					Time to play with React!
					<br />
					Enjoy!
				</Text>
			</header>
		);
	}
}

export default LayoutHeader;
