//ExampleView Object constructor
var Sidebar = function (container,model) {
 	
 	this.container = container;
    this.numberOfGuests = container.find("#numberOfGuests");
	this.totalPrice = container.find("#totPrice span");
	
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
	//this.numberOfGuests.html(model.getNumberOfGuests());
	//this.totalPrice.html(model.getTotalMenuPrice()); 
    this.confirmBtn = $(".confirmbtn");
	

	var priceToHtml = function(data) {   
    var menuList = model.getFullMenu();
    console.log(menuList);
    var pending = "";
    var toHtml = "";
        for(var i = 0; i < menuList.length; i++) {
            if(menuList[i] != undefined) {
            toHtml = '<div class="leftdivitem removeButton" id="'+ menuList[i].RecipeID  +'" title="Click to remove dish.">';
			toHtml += '<div class="hvr-back-pulse">';
            toHtml += '<div class="col-md-6"><p class="leftcontlefttext">' + menuList[i].Title + '</p></div>';
            //toHtml += '<div class="col-sm-2"></div>';
         	toHtml += '<div class="col-md-6"><p class="leftcontrighttext">' + parseInt(model.getDishPrice(menuList[i])); + 'kr</p></div></div>';
            $("#leftdiv3").append(toHtml);
            }
        }
    }

	model.addObserver(this);

    //this.removeItemFromMenu = $(".leftdiv3");

	this.removeItemFromMenu = $(".leftdiv3");
	//This function gets called when there is a change at the model
		this.update = function(data){

			try {
				
				$("#leftdiv3").empty();
				this.menuList = model.getFullMenu();
				this.numberOfGuests.html(model.getNumberOfGuests());
				this.totalPrice.html(parseInt(model.getTotalMenuPrice()));
				priceToHtml(data);
			} catch(err) {
				console.log(err);
			}
		}
	
	}


