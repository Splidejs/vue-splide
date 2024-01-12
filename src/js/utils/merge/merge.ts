import { forOwn } from '../forOwn/forOwn';
import { isObject } from '../isObject/isObject';


/**
 * Merges U to T.
 *
 * @typeParam T - An object to merge U into.
 * @typeParam U - An object to merge properties from.
 *
 * @return An merged object type.
 */
export type Merge<T extends object, U extends object> = Omit<T, keyof U> & {
  [ K in ( keyof T & keyof U ) ]: U[ K ] extends object
    ? U[ K ] extends any[]
      ? U[ K ]
      : T[ K ] extends object
        ? Merge<T[ K ], U[ K ]> extends infer A ? Cast<A, object> : never
        : U[ K ]
    : U[ K ];
} & Omit<U, keyof T>;

type Cast<T, U> = T extends U ? T : U;

/**
 * Recursively merges source properties to the object.
 * Be aware that this method does not merge arrays. They are just duplicated by `slice()`.
 *
 * @param object - An object to merge properties to.
 * @param source - A source object to merge properties from.
 *
 * @return A new object with merged properties.
 */
export function merge<T extends object, U extends object>( object: T, source: U ): Merge<T, U> {
  const merged = object as any;

  forOwn( source, ( value, key ) => {
    if ( Array.isArray( value ) ) {
      merged[ key ] = (value as []).slice();
    } else if ( isObject( value ) ) {
      merged[ key ] = merge( isObject( merged[ key ] ) ? merged[ key ] : {}, value );
    } else {
      merged[ key ] = value;
    }
  } );

  return merged as Merge<T, U>;
}
