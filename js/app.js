$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//model.addDishToMenu()
	
	//And create the needed controllers and views
	var view2 = new View2($("#container"), model);

	//var selectView = new SelectView($("#index"), model);
	var overviewView = new OverviewView($("#overview"), model);

});