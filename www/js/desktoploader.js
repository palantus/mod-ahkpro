/*
	Options:
	- apps: array of apps
*/

function DesktopLoader(){
	this.options = {};
	this.desktop = null;
	this.taskbar = null;
	this.lastLoginStatus = undefined;
}


DesktopLoader.prototype.init = function(_options){
	this.options = _options;
	var t = this;
	$(document).bind('LoggedIn', function(){
		t.run(true);
	});

	$(document).bind('LoggedOut', function(){
		t.run(false);
	});

	$(document).bind('InitialUserStatus', function(e, arg){
		t.run(arg);
	});
}

DesktopLoader.prototype.run = function(_loggedIn){
	if(this.lastLoginStatus === _loggedIn)
		return;

	this.lastLoginStatus = _loggedIn;

	var visibleApps = [];
	var loggedIn = _loggedIn !== undefined ? _loggedIn : false;

	for(i in this.options.apps){
		if((loggedIn && this.options.apps[i].requireLoggedOut !== true) || (!loggedIn && this.options.apps[i].requireLoggedIn !== true))
			visibleApps.push(this.options.apps[i]);
	}

	if(this.desktop == null){
		this.desktop = new DesktopCreator();
		this.desktop.init({
				desktopShortcuts: visibleApps
			});
	}
	this.desktop.options.desktopShortcuts = visibleApps;
	this.desktop.show();
	
	if(this.taskbar == null){
		this.taskbar = new TaskbarCreator();
		this.taskbar.init({startMenuDesktop: this.desktop});
	}
	this.taskbar.options.startMenuDesktop = this.desktop;
	this.taskbar.show();
}