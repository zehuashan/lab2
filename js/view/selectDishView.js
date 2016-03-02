
var SelectDishView = function (container,model) {

	this.container = container;
    model.addObserver(this);

    this.sImg = $(".col-md-3");
	model.getAllDishes();

	this.selectDish = function(data) {
		var dishes = data.Results;
        	var toHtml = "";
        	for(var i = 0; i < dishes.length; i++) {
         	   toHtml = '<a id="' + dishes[i].RecipeID + '"><div class="col-md-3 all '+ dishes[i].Category +'">';
         	   toHtml += '<div class="sImg"><img src="' +dishes[i].ImageURL120 + '" alt="' + dishes[i].Title + '" height="140px" width="140px"></img>';
        	   toHtml += '<div class="sName"><h5>' + dishes[i].Title + '</h5></div></a>';
        	   $("#dishcontent").append(toHtml);
        	}
	}
	
	this.update = function(data){
		try {
			
		$("#dishcontent").empty();
			this.selectDish(data);
        } 
        catch(err){
       		console.log(err)//do something with error
   		}
	}
}