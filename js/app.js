$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	
	//And create the needed controllers and views
	var selectDishView = new SelectDishView($("#SelectDishView"), model);
	var view2 = new View2($("#view2"), model);

});