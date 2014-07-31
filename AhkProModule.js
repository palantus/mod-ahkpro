var request = require('request');

var AhkProModule = function () {
};

AhkProModule.prototype.init = function(fw, onFinished) {
    this.fw = fw;
	onFinished.call(this);
}

AhkProModule.prototype.onMessage = function (req, callback) {
};
 
module.exports = AhkProModule;