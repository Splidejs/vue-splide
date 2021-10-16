import { isObject } from '../isObject';


describe( 'isObject', () => {
  test( 'can return `true` if the subject is an object.', () => {
    [ {}, { a: 1 }, new Map(), [] ].forEach( subject => {
      expect( isObject( subject ) ).toBe( true );
    } );
  } );

  test( 'can return `false` if the subject is not an object.', () => {
    [ 1, true, '1', () => 1, null, undefined, NaN, BigInt( 1 ) ].forEach( subject => {
      expect( isObject( subject ) ).toBe( false );
    } );
  } );
} );
