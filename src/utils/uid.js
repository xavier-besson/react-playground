/**
 * Generate and return a UID
 * @method get
 * @param  {String}  prefix  Prefix to add to the UID
 * @param  {String}  suffix  Suffix to add to the UID
 * @return {String}  The generated UID
 */
export function get(prefix = '', suffix = '') {
	const time = (new Date()).getTime();
	
	const hash = Math.floor((1 + Math.random()) * 0x10000).
		toString(16).
		substring(1);

	return `${prefix}${time}${hash}${suffix}`;
}
