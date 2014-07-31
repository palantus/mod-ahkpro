function ActionLinks(){
}

ActionLinks.prototype.handleCustom = function(db, custom, callback){
	
	if(typeof(custom) === "string"){
		switch(custom){
			case "GetJoinGUID" :
				db.query("EXEC ActionLinksCreate @type = 'JoinProject', @params = ?, @usesMax = 1, @userId = ?, @expirationMinutes = 1440;", [this.args.ProjectId, this.session.userId], function(res){
					callback({success:true, guid: res[0].GUID});
				});
				break;
		}
	}
	else if(typeof(custom) == "object"){
		switch(custom.action){
			case "HandleGUID" :
				if(typeof(custom.guid) === "string"){
					db.query("EXEC ActionLinksHandle @guid = ?, @projectId = ?, @userId = ?;", [custom.guid, this.args.ProjectId, this.session.userId], function(res){
						if(res !== undefined && res.length > 0)
							callback({success:true, guid: res[0].LinkGUID});
						else
							callback({success:false});
					});
				}
				break;
		}
	}
}

exports = module.exports = ActionLinks;