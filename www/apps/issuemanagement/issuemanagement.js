function loadModule_IssueManagement(){
	return {
			title: "Issue Manager", 
			icon: "/img/changelog.png", 
			popup: {
				title: "Issue Manager", 
				typeId: "IssueManApp",
				centerH: true,
				style: {width: "300px"},
				contentExternal: "/ahkpro/apps/issuemanagement/info.html"
			}
		};
}