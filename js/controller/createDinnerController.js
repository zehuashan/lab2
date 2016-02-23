var CreateDinnerController = function(view, model ) {
 	
 	view.createButton.onClick(function() {
 		view.createDinnerView.hide();
 		SelectDishView.selectDishView.show();
 	}) 
}
