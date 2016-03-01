var DishDetailController = function(view, model, masterController) {

    $("#dishDetailText").on("click", "button", function() {
    	console.log("hej");
    	masterController.showSelect();
	});
    
    view.confBut.click(function (id) {
        data = model.getDish(id);
        model.addDishToMenu(data);
    });
    
}