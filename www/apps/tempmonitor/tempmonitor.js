function loadModule_TempMonitor(){
	return {
		title: "Temp Monitor", 
		icon: "/img/thermometer.png",
		popup: {
			title: "Temperature Monitor",
			typeId: "TempMonitor",
			centerH: true,
			style: {"width": "400px", height: "400px"},
			onShow: function(){this.element.find(".sbbar").focus();},
			contentIFrame: "/tempmonitor"
		}
	};
}