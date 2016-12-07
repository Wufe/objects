export default class Utils{

	constructor(){}

	static deepExtend( ...sources: any[] ): any{
		if( sources.length == 1 )
			return sources[ 0 ];
		if( sources.length == 0 )
			return;
		let source: any = Object.assign({}, sources[0]);
		for( let i = 1; i < sources.length; i++ ){
			let add: any = sources[i];
			if( !( typeof add == 'object' ) ){
				source = add;
			}else if( typeof add == 'object' ){
				add = Object.assign({}, add);
				if( !( add instanceof Array ) ){
					for( let x in add ){
						source[x] = Utils.deepExtend(source[x], add[x]);
					}
				}else{
					for( let a = 0; a < add.length; a++ ){
						source[a] = Utils.deepExtend(source[a], add[a]);
					}
				}
			}
		}
		return source;
	}

}