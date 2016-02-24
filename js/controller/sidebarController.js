var SidebarController = function(view, model, masterController) {
 
 $("#numberOfGuests").change(function() {
    model.setNumberOfGuests(view.getNumberOfGuests()); 
 });
}