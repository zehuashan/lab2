var CreateDinnerController = function (view, model, masterController) {
 	
 	//console.log($("#createButton"));
 	//console.log(view.createButton);
 	//$("#createButton").click(function(){
 	//	console.log("test4");
 	//})
	view.createButton.click(function () {
        console.log("test3");
        masterController.hideAll();
        masterController.showSelect();
	});
}
