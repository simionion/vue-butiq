/**
 * @param {Array} arr
 * @param {Function} predicate
 * @returns {[Array,Array]}
 */
export function partition(arr, predicate) {
    return arr.reduce((acc, item) => {
        acc[predicate(item) ? 0 : 1].push(item);
        return acc;
    }, [[], []]);
}
