var MasterController = function(views, model) {
 	

	this.hideAll = function() {
		for(var i = 0; i < views.length; i++) {
			views[i].container.hide();
		}
	}


	this.showStart = function () {
		this.hideAll();
		views[0].container.show();
	}

	this.showSelect = function () {
		this.hideAll();
		views[1].container.show();
		views[2].container.show();
	}
}