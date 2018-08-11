/**
 * Assures that a value of a child chain property is returned without runtime errors.
 *
 * If the checked property does not exist in the provided object or one of the children in the chain
 * is undefined, then it returns the provided fallback value.
 *
 * The fallback can be also returned if the checked property is falsy (i.e. undefined, null, false, 0, '', etc.)
 * and the fallbackOnFalsy flag is set to <TRUE>.
 *
 * Arrays could be checked as well by passing the index in the path; ex: getValue(arr, '0.obj')
 *
 * Note: if object or path params are not provided, the fallback is returned.
 *
 * @param {Object|Array} object - the object in which the property value is checked.
 * @param {String} path - object property access chain or array index, or both; ex: 'prop1.v.s.10.test'
 * @param {*} fallback - the fallback value.
 * @param {Boolean} fallbackOnFalsy - if true and the found property value is falsy then it returns the fallback.
 *
 * @returns {*} - the deepest property value or the fallback.
 */
module.exports = function (object, path, fallback, fallbackOnFalsy) {
    if (!object || !path) {
        return fallback;
    }

    // Reduces object properties to the deepest property in the path argument.
    return path.split('.').reduce((object, property) => {
       if (object && typeof object !== 'string' && object.hasOwnProperty(property)) {
            // The property is found but it may be falsy.
            // If fallback is active for falsy values, the fallback is returned, otherwise the property value.
            return !object[property] && fallbackOnFalsy ? fallback : object[property];
        } else {
            // Returns the fallback if current chain link does not exist or it does not contain the property.
            return fallback;
        }
    }, object);
};