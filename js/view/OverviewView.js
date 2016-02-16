//ExampleView Object constructor56
var OverviewView = function (container,model) {
	this.numberOfGuests = container.find("#numberOfGuests");
    this.dishPrice = container.find("#dishPrice");
    this.totalMenuPrice = container.find("totalMenuPrice");


	container.find(".statustext span").html(model.getNumberOfGuests());
	container.find("#menu1 span").html(model.getDishPrice(1));
	container.find("#menu100 span").html(model.getDishPrice(100));
	container.find("#menu200 span").html(model.getDishPrice(200));
	container.find("#totPrice span").html(model.getTotalMenuPrice());


}