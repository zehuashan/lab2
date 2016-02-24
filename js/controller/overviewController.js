var OverviewController = function(view, model, masterController) {

 view.backButton.click(function () {
   masterController.showSelect();
});
 view.goToPrep.click(function () {
   masterController.showPrep();
});


}