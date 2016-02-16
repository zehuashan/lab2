$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//model.addDishToMenu()
	
	//And create the needed controllers and views
	var selectDishView = new SelectDishView($("#SelectDishView"), model);
	var view2 = new View2($("#view2"), model);
	var exampleView = new ExampleView($("#exampleView"), model);
	//var view2 = new View2($("#view2"), model);

	//var selectView = new SelectView($("#index"), model);
	var overviewView = new OverviewView($("#overview"), model);

});