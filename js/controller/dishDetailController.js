var DishDetailController = function(view, model, masterController) {

    $("#dishDetailText").on("click", "button", function() {
    	console.log("hej");
    	masterController.showSelect();
	});
    
    view.confBut.click(function (id) {
        //console.log(model.getDish(model.giveId()));
        model.addDishToMenu(event.target.id);
    });
    
}