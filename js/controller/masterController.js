var MasterController = function(views, model) {
 	
	this.hideAll = function() {
		$("#createDinner").hide();
		$("#sidebar").hide();
		$("#selectDish").hide();
		$("#dishDet").hide();
		$("#dishPrev").hide();
		$("#overview").hide();
	}

	this.showSelect = function () {
		this.hideAll();
		views[2]
		views[1].show();
	}
}