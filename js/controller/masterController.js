var MasterController = function(views, model) {
 	

	this.hideAll = function() {
		for(var i = 0; i < views.length; i++) {
			views[i].container.hide();
			console.log(views[i].container);
		}
	}


	this.showStart = function () {
		this.hideAll();
		views[0].container.show();
	}

	this.showSelect = function () {
		this.hideAll();
		views[1].container.show();
	}
}