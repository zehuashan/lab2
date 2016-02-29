//ExampleView Object constructor56
var DishDetailView = function (container,model) {

	this.container = container;
	this.backButton = $("#backToSelectDish");
	this.numberOfGuests = container.find(".numberOfGuests2 span");
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.ingTotPrice = container.find(".ingpricetot span");
	var totalPrice = 0;
    this.confBut = container.find("#confBut")
	
	/* om en dish väljs i selectDish ska IDn skickas in i variabeln dishId, allt annat är fixat */
	var dishId = parseInt(model.giveId());
	var printIngridients = function(id){
		var toHtml = "";
		var ingredientsArray = model.getDish(id).ingredients;
		for(var i = 0; i < ingredientsArray.length; i++){
		toHtml +='<div class="col-sm-3"><p>' + ingredientsArray[i].quantity*model.getNumberOfGuests() + ' ' + ingredientsArray[i].unit +'</div>';
        toHtml +='<div class="col-sm-3"><p>' + ingredientsArray[i].name + '</p></div>';
        toHtml +='<div class="col-sm-3"><p>SEK</p></div>';
        toHtml +='<div class="col-sm-3"><p>' + ingredientsArray[i].price*model.getNumberOfGuests() + '</p></div>';
		totalPrice =  totalPrice + ingredientsArray[i].price*model.getNumberOfGuests();
		}		
		$("#ingredientsTable").append(toHtml);
	}
	
	
	var printDishInfo = function(id){
		var toHtml1 = "";
		var toHtml2 = "";
		toHtml1 = '<h1 style="padding-left:2%;" id="dishName"> '+ model.getDish(id).name +' </h1>';
		toHtml1 +='<div style="padding-left:2%"><div class="sImg"><img src="images/' + model.getDish(id).image + '"></img></div>';
		toHtml1 +='<div id="description"><p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span></p></div>';
		toHtml2 = '<h1> Preperation </h1>';
		toHtml2 += '<p>'+ model.getDish(id).description +'</p>';
		$("#dishDetailText").append(toHtml1);
		$("#rightcont3").append(toHtml2);
	}
	
	//model.addObserver(this);
	//this.ingTotPrice.html(totalPrice);
	
	
	
	//This function gets called when there is a change at the model
	this.update = function(arg){
		totalPrice = 0;
        dishId = parseInt(model.giveId());
		this.numberOfGuests.html(model.getNumberOfGuests());
		$("#ingredientsTable").empty();
		$("#dishDetailText").empty();
		$("#rightcont3").empty();
		printIngridients(dishId);
		printDishInfo(dishId);
		this.ingTotPrice.html(totalPrice);
	}
	
	
	
	
}




	/*
	
	
	<h1 style="padding-left:2%;" id="dishName"><span>Placeholder</span></h1>
    <div style="padding-left:2%;" id="dishPic"> </div>
    <div style="padding-left:2%;" id="prep"><p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </span></p></div>
    <div class="bottom1"><button type="button" class="btn btn-warning">Back to select dish</button></div>

	
	container.find("#dishPic").html("<img src='" + 'images/' + model.getDish(1).image + "' alt='" + model.getDish(1).name + "'>");


	container.find("#dishName span").html(model.getDish(1).name);
	container.find("#prep span").html(model.getDish(1).description);
	container.find("#guests span").html(model.getNumberOfGuests());

	container.find("#ingquant1 span").html(ingredientsArray[0].quantity*guests);
	container.find("#ingquant2 span").html(ingredientsArray[1].quantity*guests);
	container.find("#ingquant3 span").html(ingredientsArray[2].quantity*guests);
	container.find("#ingquant4 span").html(ingredientsArray[3].quantity*guests);
	container.find("#ingquant5 span").html(ingredientsArray[4].quantity*guests);

	container.find("#ingname1 span").html(ingredientsArray[0].name);
	container.find("#ingname2 span").html(ingredientsArray[1].name);
	container.find("#ingname3 span").html(ingredientsArray[2].name);
	container.find("#ingname4 span").html(ingredientsArray[3].name);
	container.find("#ingname5 span").html(ingredientsArray[4].name);

	container.find("#ingprice1 span").html(ingredientsArray[0].price*guests);
	container.find("#ingprice2 span").html(ingredientsArray[1].price*guests);
	container.find("#ingprice3 span").html(ingredientsArray[2].price*guests);
	container.find("#ingprice4 span").html(ingredientsArray[3].price*guests);
	container.find("#ingprice5 span").html(ingredientsArray[4].price*guests);

	priceTotal = (ingredientsArray[0].price + ingredientsArray[1].price + ingredientsArray[2].price + ingredientsArray[3].price + ingredientsArray[4].price)*guests;
	container.find("#ingpricetot span").html(priceTotal);*/