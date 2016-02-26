var SidebarController = function(view, model, masterController) {
 
 view.confirmBtn.click(function () {
   masterController.showOverview();
});

 view.removeItemFromMenu.click(function () {
     //TODO
     model.removeDishFromMenu(1);
 });
	
 $("#numberOfGuests").change(function() {
    model.setNumberOfGuests(view.getNumberOfGuests()); 
 });
 view.plusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() + 1);
 });
 
 view.minusButton.click(function(){
 model.setNumberOfGuests(model.getNumberOfGuests() - 1);
 });
 
}