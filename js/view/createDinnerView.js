var CreateDinnerView = function (container,model) {

	this.container = container;
    
    this.createButton = $("#createButton");
    //console.log(this.createButton);

	model.addObserver(this)
	this.update = function(arg){

	}
}