/**
 * Class RouterManager
 * Singleton that permit to manage the application router
 */
class RouterManager {
	
	/**
	 * The current router reference
	 * @type {Object}
	 */
	router = null;
	
	/**
	 * The singleton instance
	 * @type {Layout}
	 */
	static instance = null;
		
	/**
	 * Singleton forger
	 * @method forge
	 * @param {Router}  router  The router of the application
	 * @return {RouterManager}
	 */
	static forge(router) {
		return RouterManager.instance === null ? RouterManager.instance = new RouterManager(router) : RouterManager.instance;
	}
	
	/**
	 * Return the instance of the manager
	 * @method getInstance
	 * @return {RouterManager}
	 */
	static getInstance() {
		return RouterManager.instance; 
	}
	
	/**
	 * Class constructor
	 * Can't be called directly, use the forge method
	 * @method constructor
	 * @param {Router}  router  The router of the application
	 * @return {void}
	 */
	constructor(router) {
		this.setRouter(router);
	}
	
	/**
	 * Set the router property
	 * Permit to work with the good rooter reference, 
	 * @method setCurrentWindow
	 * @param {Router}  router  The router of the application
	 * @return {RouterManager}  The current instance, permit to maintain chainability
	 */
	setRouter(router) {
		this.router = router;
		return this;
	}
	
	/**
	 * Return the current pathname
	 * @method getCurrentPathName
	 * @return {String} Current pathname
	 */
	getCurrentPathName() {
		return this.router.getCurrentLocation().pathname;
	}	
}

export default RouterManager;
