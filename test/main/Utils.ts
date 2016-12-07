/// <reference path="../../typings/globals/mocha/index.d.ts" />
/// <reference path="../../typings/globals/should/index.d.ts" />

import * as Mocha from 'mocha';
import * as Objects from '../../src/index';
import * as Should from 'should';

const Utils = Objects.Utils;

describe( 'Utils', () => {
	it( 'should be a class', () => {
		Should( typeof Utils ).be.exactly( "function" );
	});
	describe( 'deepExtend', () => {
		it( 'should extend an object given 6 sources', () => {
			let a: any = {
				a: 'a',
				b: {
					c: 'c',
					d: 'd'
				}
			};

			let b: any = {
				b: {
					d: 'asd'
				}
			};

			let c: any = {
				b: {
					d: 'lol',
					e: 'asd'
				}
			};

			let d: any = {
				b: false
			};

			let e: any = {
				b: {
					d: 't1',
					e: 't2'
				}
			};

			let f: any = {
				b: {
					c: {
						z: 'end',
						u: false
					}
				}
			};
			let ext: any = Utils.deepExtend( a, b, c, d, e, f );
			Should( ext ).have.propertyByPath( 'b', 'c', 'z' ).which.is.equal( 'end' );
			Should( ext ).have.propertyByPath( 'b', 'd' ).which.is.equal( 't1' );
			Should( ext ).have.propertyByPath( 'b', 'e' ).which.is.equal( 't2' );
			Should( ext ).have.propertyByPath( 'b', 'c', 'u' ).which.is.equal( false );
		});
	});
});