## Objects

Collection of random utilities useful to manage *Node.js objects*.

### How to use

**getNestedValue**

`getNestedValue( object: any, ...keys: string[] )`

```js
const Objects = require( 'random-object-utils' );

let obj = {
	a: {
		b: {
			c: {
				d: 'd',
				e: 'e'
			}
		}
	}
};
console.log( Objects.getNestedValue( obj, 'a', 'b', 'c', 'e' ) );
// prints 'e'
```

**setNestedValue**

`setNestedValue( object: any, value: any, ...keys: string[] )`

```js
const Objects = require( 'random-object-utils' );

let obj = {
	a: {
		b: {
			c: {
				d: 'd',
				e: 'e'
			}
		}
	}
};
Objects.setNestedValue( obj, 'f', 'a', 'b', 'c', 'e' );
console.log( Objects.getNestedValue( obj, 'a', 'b', 'c', 'e' ) );
// prints 'f'
```

**deepExtend**

`deepExtend( ...sources: any[] )`

```js
const Objects = require( 'random-object-utils' );

let obj1 = {
	a: {
		b: {
			c: {
				d: 'd',
				e: 'e'
			}
		}
	}
};
let obj2 = {
	a: {
		b: false,
		c: {
			z: 'yes'
		}
	}
};
let res = Objects.deepExtend( obj1, obj2 );
console.log( Objects.getNestedValue( obj, 'a', 'c', 'z' ) );
// prints 'yes'
```