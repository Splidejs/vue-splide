/**
 * Checks if the given subject is an object or not.
 *
 * @param subject - A subject to check.
 *
 * @return `true` if the subject is an object, or otherwise `false`.
 */
export function isObject( subject: unknown ): subject is object {
  return subject !== null && typeof subject === 'object';
}
