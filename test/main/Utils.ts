declare let describe: any;
declare let it: any;
declare let require: any;

const Objects = require( '../../build/lib/index' );
const Utils = Objects.Utils;

describe( 'Utils', () => {
	it( 'should be a class', () => {
		Utils.should.have.property( 'constructor' );
	});
});