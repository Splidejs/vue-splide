import { forOwn } from '../forOwn';


describe( 'forOwn', () => {
  test( 'can iterate an object by own enumerable properties.', () => {
    const object = { a: 1, b: 2, c: 3 };
    let counter = 0;

    forOwn( object, ( value, key ) => {
      counter++;
      expect( object[ key ] ).toBe( value );
    } );

    expect( counter ).toBe( Object.keys( object ).length );
  } );

  test( 'should not handle inherited properties.', () => {
    class Constructor {
      a = 1;
      b = 2;
    }

    ( Constructor as any ).prototype[ 'c' ] = 3;

    const object: any = {};

    forOwn( new Constructor(), ( value, key ) => {
      object[ key ] = value;
    } );

    expect( object ).toStrictEqual( { a: 1, b: 2 } );
  } );
} );
