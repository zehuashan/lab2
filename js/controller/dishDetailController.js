var DishDetailController = function(view, model, masterController) {
 view.backButton.click(function () {
   masterController.showSelect();
});
}