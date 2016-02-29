
var SelectDishView = function (container,model) {

	this.container = container;
    model.addObserver(this);
	model.getAllDishes();
    this.sImg = $(".col-md-3");
	
	this.update = function(data){
		var dishes = data.Results;
        var toHtml = "";
        console.log(dishes);
        for(var i = 0; i < dishes.length; i++) {
            toHtml = '<a><div class="col-md-3 all '+ dishes[i].Category +'" id="' + dishes[i].RecipeID + '">';
            toHtml += '<div class="sImg"><img src="' +dishes[i].ImageURL120 + '" alt="' + dishes[i].Title + '"></img>';
            toHtml += '<div class="sName"><h5>' + dishes[i].Title + '</h5></div></a>';
            $("#dishcontent").append(toHtml);
        }
	}
}