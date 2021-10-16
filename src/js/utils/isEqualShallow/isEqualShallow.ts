/**
 * Checks if provided two arrays are shallowly equal or not.
 *
 * @param array1 - An array to test.
 * @param array2 - Anther array to test.
 *
 * @return `true` if they are considered as equal, or otherwise `false`.
 */
export function isEqualShallow( array1: unknown[], array2: unknown[] ): boolean {
  return array1.length === array2.length
    && ! array1.some( ( elm, index ) => elm !== array2[ index ] );
}
