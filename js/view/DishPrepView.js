//ExampleView Object constructor56
var DishPrepView = function (container,model) {
	container.find("#dishName span").html(model.getDish(1).name);
	container.find("#prep span").html(model.getDish(1).description);
	container.find(".statustext span").html(model.getNumberOfGuests());
	container.find("#menu101 span").html(model.getDishPrice(101));
	container.find("#menu200 span").html(model.getDishPrice(200));
	container.find("#totPrice span").html(model.getTotalMenuPrice());
}