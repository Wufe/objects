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
	describe( 'test', () => {
		let test: string = Utils.test();
		test.should.be.exactly( "lol" );
	})
});