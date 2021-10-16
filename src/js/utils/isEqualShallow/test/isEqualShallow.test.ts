import { isEqualShallow } from '../isEqualShallow';


describe( 'isEqualShallow', () => {
  test( 'can check if 2 arrays with primitives are shallowly equal or not.', () => {
    const array1 = [ 1, true, '1' ];
    const array2 = [ 1, true, '1' ];
    const array3 = [ 1, true, '3' ];

    expect( isEqualShallow( array1, array2 ) ).toBe( true );
    expect( isEqualShallow( array1, array3 ) ).toBe( false );
  } );

  test( 'can check if 2 arrays with objects are shallowly equal or not.', () => {
    const object1 = {};
    const object2 = {};

    const array1 = [ object1, object2 ];
    const array2 = [ object1, object2 ];
    const array3 = [ object2, object2 ];

    expect( isEqualShallow( array1, array2 ) ).toBe( true );
    expect( isEqualShallow( array1, array3 ) ).toBe( false );
  } );

  test( 'should return false if length of testing arrays are different.', () => {
    const array1 = [ 1, 1 ];
    const array2 = [ 1, 1, 1 ];

    expect( isEqualShallow( array1, array2 ) ).toBe( false );
  } );
} );
