function ActionLinkHandler(){
	
}

ActionLinkHandler.prototype.run = function(callback){
	var actionLink = getUrlVar("actionlink");
	if(actionLink){
		callback(actionLink);
	}
}

