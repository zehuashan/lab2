//ExampleView Object constructor
var SelectDishView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)

 this.getTotalMenuPrice = container.find("#menuPrice")

 this.getTotalMenuPrice.html(model.getTotalMenuPrice());
}