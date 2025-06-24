export const typeUtil = () => ({
    isArray: val => Array.isArray(val),
    isObject: val => val !== null && typeof val === 'object',
    isFunction: val => typeof val === 'function',
    isPromise: val =>
        !!val &&
        (typeof val === 'object' || typeof val === 'function') &&
        typeof val.then === 'function',
})
