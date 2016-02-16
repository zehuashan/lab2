//ExampleView Object constructor
var SelectDishView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)

 container.find("#menuPrice").html(model.getTotalMenuPrice());
 container.find(".statustext span").html(model.getNumberOfGuests());
 container.find("#menu1 span").html(model.getDishPrice(1));
 container.find("#menu100 span").html(model.getDishPrice(100));
 container.find("#menu200 span").html(model.getDishPrice(200));
 container.find("#totPrice span").html(model.getTotalMenuPrice());
}