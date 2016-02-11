//ExampleView Object constructor
var ExampleView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 
 this.numberOfGuests.html(model.getNumberOfGuests());
 this.plusButton.html(model.plusGuest());
 this.minusButton.html(model.minusGuest());
}