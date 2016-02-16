//ExampleView Object constructor
var View2 = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 
 container.find("#g1 span").html(model.getNumberOfGuests());
 container.find("#dish1").html(model.getDish(1).name);
 container.find("#dish2").html(model.getDish(2).name);
 container.find("#dish3").html(model.getDish(3).name);
 container.find("#dish100").html(model.getDish(100).name);
 container.find("#dish200").html(model.getDish(200).name);
}