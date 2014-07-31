function loadModule_SynologyBrowser(){

	return {
		title: "Synology browser", 
		icon: "/img/filebrowser.png", 
		requireLoggedIn: true,
		popup: {
			title: "Synology browser", 
			typeId: "SynologyBrowserApp",
			centerH: true,
			style: {width: "500px"},
			content: "",
			onShow: function(){
				var e = this.element.find(".pccontent");
				e.addClass("synology");
				
				var browser = new SynologyBrowser(e);
				browser.isNested = true;
				browser.run();
			}
		}
	};
}

