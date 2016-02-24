//ExampleView Object constructor56
var DishPrepView = function (container,model) {

	this.container = container;
	container.find(".statustext span").html(model.getNumberOfGuests());
	container.find("#dishName span").html(model.getDish(1).name);
	container.find("#prep span").html(model.getDish(1).description);
	container.find("#img1").html("<img src='" + 'images/' + model.getDish(1).image + "' alt='" + model.getDish(1).name + "'>");
	container.find("#img2").html("<img src='" + 'images/' + model.getDish(1).image + "' alt='" + model.getDish(1).name + "'>");
	container.find("#img3").html("<img src='" + 'images/' + model.getDish(1).image + "' alt='" + model.getDish(1).name + "'>");
}