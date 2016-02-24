//ExampleView Object constructor56
var DishDetailView = function (container,model) {

	this.container = container;
	var ingredientsArray = model.getAllIngredients();
	var priceTotal = 0;
	var guests = model.getNumberOfGuests();
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
	container.find("#ingpricetot span").html(priceTotal);
}