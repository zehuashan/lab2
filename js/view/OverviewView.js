//ExampleView Object constructor56
var OverviewView = function (container,model) {
	this.container = container;
	this.backButton = $("#back1");
	this.numberOfGuests = container.find(".statustext span");
	this.numberOfGuests.html(model.getNumberOfGuests());
	container.find("#menu1 span").html(model.getDishPrice(1));
	container.find("#menu101 span").html(model.getDishPrice(101));
	container.find("#menu200 span").html(model.getDishPrice(200));
	container.find("#totPrice span").html(model.getTotalMenuPrice());
	
	
	
	model.addObserver(this)
	this.update = function(arg){
	this.numberOfGuests.html(model.getNumberOfGuests());

	}
}