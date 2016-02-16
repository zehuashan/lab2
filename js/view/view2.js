//ExampleView Object constructor
var View2 = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 this.numberOfGuests = container.find("#numberOfGuests");
 this.plusButton = container.find("#plusGuest");
 this.minusButton = container.find("#minusGuest");
 this.dishName = container.find("dishName")
 
 container.find("#g1 span").html(model.getNumberOfGuests());
 container.find("#dish1 span").html(model.getDishName(1));
 container.find("#dish2 span").html(model.getDishName(2));
 container.find("#dish3 span").html(model.getDishName(3));
 container.find("#dish100 span").html(model.getDishName(100));
 container.find("#dish101 span").html(model.getDishName(101));
}