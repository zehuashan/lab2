var DishDetailController = function(view, model, masterController) {
    view.backButton.click(function () {
        masterController.showSelect();
    });
    
    view.confBut.click(function (data) {
        //console.log(model.getDish(model.giveId()));
        model.addDishToMenu(data);
    });
    
}