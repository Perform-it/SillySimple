var SILLY = (function(module){
	
	module.DoIT = function(resultObject){
	resultObject.prepend(Date() + '<br/>');
	};
	
	return module;
} (SILLY || {}));