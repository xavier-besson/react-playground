/**
 * Class LayoutManager
 * Singleton that permit to manage the application layout
 */
class LayoutManager {
	
	/**
	 * The current window reference
	 * @type {Element}
	 */
	currentWindow = null;
	
	/**
	 * The singleton instance
	 * @type {Layout}
	 */
	static instance = null;
		
	/**
	 * Singleton forger
	 * @method forge
	 * @param {Element}  DOMNode  The DOM node associate to the layout
	 * @return {LayoutManager}
	 */
	static forge(DOMNode) {
		return LayoutManager.instance === null ?  LayoutManager.instance = new LayoutManager(DOMNode) : LayoutManager.instance;
	}
	
	/**
	 * Return the instance of the manager
	 * @method getInstance
	 * @return {LayoutManager}
	 */
	static getInstance() {
		return LayoutManager.instance; 
	}
	
	/**
	 * Class constructor
	 * Can't be called directly, use the forge method
	 * @method constructor
	 * @param {Element}  DOMNode  The DOM node associate to the layout
	 * @return {void}
	 */
	constructor(DOMNode) {
		this.setCurrentWindow(DOMNode);
	}
	
	/**
	 * Set the currentWindow property
	 * Permit to work with the good window reference, 
	 * in the case the component is injected in a window from another window.
	 * @method setCurrentWindow
	 * @param {Element}  DOMNode   The DOM node used as starting point to search it associated window
	 * @return {LayoutManager}  The current instance, permit to maintain chainability
	 */
	setCurrentWindow(DOMNode) {
		this.currentWindow = this.getDOMNodeWindow(DOMNode);
		
		return this;
	}
	
	/**
	* Find the window of the root DOM node.
	* Permit to work with the good window reference, 
	* in the case the component is injected in a window from another window.
	* @method getDOMNodeWindow
	* @param {Element}  DOMNode  The DOM node used as starting point to search it associated window
	* @return {Element} The associate window
	*/
	getDOMNodeWindow(DOMNode) {	
		return ((DOMNode.ownerDocument.defaultView) ?
		DOMNode.ownerDocument.defaultView :
		DOMNode.ownerDocument.parentWindow) || window;
	};
	
	/**
	 * Inject meta properties in the page.
	 * @method setMetaInDom
	 * @param {object}  meta  The meta properties that will be set to the page
	 * @return {LayoutManager}  The current instance, permit to maintain chainability
	 */
	setMetaInDom(meta) {
		if(this.currentWindow !== null) {
			const metaDescriptionDomNode = this.currentWindow.document.querySelector('meta[name=description]');
			
			this.currentWindow.document.title = meta.title;
			if(metaDescriptionDomNode) {
				metaDescriptionDomNode.content = meta.description;
			}
		}
		
		return this;
	}

	/**
	 * Inject CSS files in the page.
	 * @method injectCssFiles
	 * @param {Array} files  The CSS files to inject in the page
	 * @return {LayoutManager}  The current instance, permit to maintain chainability
	 */
	injectCssFiles(files = []) {
		if(this.currentWindow !== null && files.length) {
			const doc = this.currentWindow.document;
			const head = doc.head;

			files.forEach((file) => {
				let link = doc.createElement('link');
				link.type = 'text/css';
				link.rel = 'stylesheet';
				link.href = file;
				head.appendChild(link);
			});
		}
		
		return this;
	}
	
}

export default LayoutManager;
