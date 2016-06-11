'use strict';

function collect_all_even(collection) {
	var ar = [];
			
	for(var i = 0; i < collection.length; i++)
		if(collection[i] % 2 === 0)
			ar.push(collection[i]);
			
	return ar;
}

module.exports = collect_all_even;
