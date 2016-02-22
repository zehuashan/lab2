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

 container.find("#img1").html("<img src='" + 'images/' + model.getDish(1).image + "' alt='" + model.getDish(1).name + "'>");
 container.find("#img2").html("<img src='" + 'images/' + model.getDish(2).image + "' alt='" + model.getDish(2).name + "'>");
 container.find("#img3").html("<img src='" + 'images/' + model.getDish(3).image + "' alt='" + model.getDish(3).name + "'>");
 container.find("#img100").html("<img src='" + 'images/' + model.getDish(100).image + "' alt='" + model.getDish(100).name + "'>");
 container.find("#img200").html("<img src='" + 'images/' + model.getDish(200).image + "' alt='" + model.getDish(200).name + "'>");

 var div = $("<div />", {
 	class: "ny",
 	id: "kaffe"
 
 }).html("hel!");
 console.log(div);

}