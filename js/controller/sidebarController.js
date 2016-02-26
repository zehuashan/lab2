var SidebarController = function(view, model, masterController) {
 
 view.confirmBtn.click(function () {
   masterController.showOverview();
});

 $("#leftdiv3").on("click", ".removeButton", function () {
    model.removeDishFromMenu(this.id);
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