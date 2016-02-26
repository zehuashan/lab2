var DishDetailController = function(view, model, masterController) {
    view.backButton.click(function () {
        masterController.showSelect();
    });
    
    view.confBut.click(function (id) {
        //console.log(model.getDish(model.giveId()));
        model.addDishToMenu(model.giveId());
    });
    
}