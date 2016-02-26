var MasterController = function(views, model) {
 	

	this.hideAll = function() {
		for(var i = 0; i < views.length; i++) {
			//console.log(views[i]);
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
	
	this.showOverview = function () {
		this.hideAll();
		views[4].container.show();
	}
	
	this.showDetail = function () {
		this.hideAll();
		views[1].container.show();
		views[3].container.show();
	}
	
	this.showPrep = function () {
		this.hideAll();
		views[5].container.show();
	}
    
    this.addToMenu = function (id) {
        model.addDishToMenu(id);
    }

}