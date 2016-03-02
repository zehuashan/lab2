var DishDetailController = function(view, model, masterController) {

    $("#dishDetailText").on("click", "button", function() {
    	//console.log("hej");
    	masterController.showSelect();
	});
    
    view.confirmDishButton.click(function () {
    	console.log("ConfirmationButton " + event.target.id);
        model.addDishHelp(event.target.id);
        masterController.showSelect();
    });
    
}