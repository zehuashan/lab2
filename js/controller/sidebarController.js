var SidebarController = function(view, model, masterController) {
 
 view.confirmBtn.click(function () {
   masterController.showOverview();
});

 view.removeItemFromMenu.click(function () {
     //TODO
    console.log("test");
    model.trackId(this.id);
    console.log(this.id);
    model.removeDishFromMenu(model.giveId());
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