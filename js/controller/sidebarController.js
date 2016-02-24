var SidebarController = function(view, model, masterController) {
 
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