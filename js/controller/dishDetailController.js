var DishDetailController = function(view, model, masterController) {
    view.backButton.click(function () {
        masterController.showSelect();
    });
    
    view.confirmButton.click(function () {
        model.addDishToMenu(parseInt(model.giveId()));
    });
}