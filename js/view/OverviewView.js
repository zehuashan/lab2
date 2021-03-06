//ExampleView Object constructor56
var OverviewView = function (container,model) {
	this.container = container;
	this.backButton = $("#back1");
	this.goToPrep = $("#goToPrep");
	this.numberOfGuests = container.find(".statustext span");
	this.totalPrice = container.find("#totPrice span");
	//this.numberOfGuests.html(model.getNumberOfGuests());
	//this.totalPrice.html(model.getTotalMenuPrice()); 
	var menuList = model.getFullMenu();
	console.log(menuList);
	
	var overviewToHtml= function(data){  
	$("#menuviewinner").empty();      
	var toHtml = "";    
        for(var i = 0; i < menuList.length; i++) {
            if(menuList[i] != undefined) {
            var priceOf = parseInt(model.getDishPrice(menuList[i]));
			toHtml = '<div class="col-md-4" id="' + menuList[i].RecipeID + '">';
            toHtml += '<div class="sImg1"><img src="' + menuList[i].ImageURL + '" alt="' + menuList[i].Title + '" height="140" width=140"></img></div>';
            toHtml += '<div class="sName">' + menuList[i].Title + '</div>';
            toHtml += '<h1 class="menuviewitem">' + priceOf + 'kr</h1></div>';
            $("#menuviewinner").append(toHtml);
            } else {
                $("#menuviewinner").append("");
            }
        }
	}
	
	model.addObserver(this)

	this.update = function(data){
	
	try {
		this.numberOfGuests.html(model.getNumberOfGuests());
		this.totalPrice.html(parseInt(model.getTotalMenuPrice()));
		overviewToHtml(data);
	} catch(err) {
		console.log(err);
	}
	}
}