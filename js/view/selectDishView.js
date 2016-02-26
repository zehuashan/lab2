
var SelectDishView = function (container,model) {

	this.container = container;

    var selectDishes = function(type) {   
        var dishes = model.getAllDishes(type);
        var toHtml = "";    
        for(var i = 0; i < dishes.length; i++) {
            toHtml = '<a><div class="col-md-3 all '+ dishes[i].type +'" id="' + dishes[i].id + '">';
            toHtml += '<div class="sImg"><img src="images/' + dishes[i].image + '" alt="' + dishes[i].name + '"></img>';
            toHtml += '<div class="sName">' + dishes[i].name + '</div></a>';
            toHtml += '<div class="sDisc">' + dishes[i].description.substring(0,100) + '...</div> </div>';
            $("#dishcontent").append(toHtml);
        }
    }
    
    model.addObserver(this);
	selectDishes('all');
    this.sImg = $(".col-md-3");
	
	this.update = function(arg){
		
	}
}