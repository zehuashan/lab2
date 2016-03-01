//ExampleView Object constructor56
var DishDetailView = function (container,model) {

	this.container = container;
	this.backButton = $("#backToSelectDish");
	this.numberOfGuests = container.find(".numberOfGuests2 span");
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.ingTotPrice = container.find(".ingpricetot span");
	var totalPrice = 0;
    this.confBut = container.find("#confBut")
    model.addObserver(this);
	
	/* om en dish väljs i selectDish ska IDn skickas in i variabeln dishId, allt annat är fixat */
	var dishId = parseInt(model.giveId());
	var printIngridients = function(data){
		var toHtml = "";
		var ingredientsArray = data.Ingredients;
		//console.log(ingredientsArray + "ing");

		toHtml += '<table style="width:90%">';
		for(var i = 0; i < ingredientsArray.length; i++){

		var priceOf = parseInt(ingredientsArray[i].Quantity*model.getNumberOfGuests());
		
		if(ingredientsArray[i].Unit==null){
			//print nothing
        }else{
		toHtml +='<tr><td>' + priceOf + ' ' + ingredientsArray[i].Unit +'</td>';
        toHtml +='<td>' + ingredientsArray[i].Name + '</td>';
        toHtml +='<td>' + priceOf + '</td>';
        toHtml +='<td>SEK</td></tr>';}

		//toHtml +='<li><div class="col-sm-3"><p>' + priceOf + ' ' + ingredientsArray[i].Unit +'</div>';
        //toHtml +='<div class="col-sm-3"><p>' + ingredientsArray[i].Name + '</p></div>';
        //toHtml +='<div class="col-sm-3"><p>SEK</p></div>';
        //toHtml +='<div class="col-sm-3"><p>' + priceOf + '</p></div></li>';
		totalPrice =  totalPrice + priceOf;
		}
		toHtml += '</table>';
		$("#ingredientsTable").append(toHtml);
	}
	
	
	var printDishInfo = function(data){
		var toHtml1 = "";
		var toHtml2 = "";
		toHtml1 = '<h1 style="padding-left:2%;" id="dishName"> '+ data.Title +' </h1>';
		toHtml1 +='<div style="padding-left:2%"><div class="detailImg"><img src="' + data.ImageURL + '" width="320" height="320"></img></div>';
		toHtml1 +='<div id="description"><p><span>' + data.Description + '</span></p></div>';
		toHtml1 +='<button type="button" class="btn btn-warning" id="backToSelectDish">Back to select dish</button>';
		
		toHtml2 = '<h1> Preperation </h1>';
		toHtml2 += '<p>'+ data.Instructions +'</p>';
		$("#dishDetailText").append(toHtml1);
		$("#rightcont3").append(toHtml2);
	}
	

	//this.ingTotPrice.html(totalPrice);
	
	
	
	//This function gets called when there is a change at the model
	this.update = function(data){
		console.log("apa: " +data);
		totalPrice = 0;
        //dishId = parseInt(model.giveId());
		
		try {
			this.numberOfGuests.html(model.getNumberOfGuests());
			$("#ingredientsTable").empty();
			$("#dishDetailText").empty();
			$("#rightcont3").empty();
			printIngridients(data);
			printDishInfo(data);
			this.ingTotPrice.html(totalPrice);
		} catch(err) {
			console.log(err);
		}
		
	}
}