//ExampleView Object constructor
var Sidebar = function (container,model) {
 	
 	this.container = container;
    this.numberOfGuests = container.find("#numberOfGuests");
	this.totalPrice = container.find("#totPrice span");
	
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalPrice.html(model.getTotalMenuPrice()); 
    this.confirmBtn = $(".confirmbtn");
	

	var priceToHtml = function() {   
    this.menuList = model.getFullMenu();
    var pending = "";
    var toHtml = "";
       if(menuList.length==0){
        	pending = "pending"
        } else {
        	pending = model.getFullMenu();
        }
        for(var i = 0; i < menuList.length; i++) {
            if(menuList[i] != undefined) {
            toHtml = '<div class="leftdivitem" id="'+ menuList[i].id  +'" title="Click to remove dish.">';
			toHtml += '<div class="hvr-back-pulse">';
            toHtml += '<div class="col-sm-6"><p class="leftcontlefttext">' + menuList[i].name + '</p></div>';
            toHtml += '<div class="col-sm-2"></div>';
         	toHtml += '<div class="col-sm-4"><p class="leftcontrighttext">' + model.getDishPrice(menuList[i].id); + 'kr</p></div></div>';
            $("#leftdiv3").append(toHtml);
            }
        }
    }

	priceToHtml();

	model.addObserver(this);

    this.removeItemFromMenu = $(".leftdivitem");
	//This function gets called when there is a change at the model
		this.update = function(arg){
			this.numberOfGuests.html(model.getNumberOfGuests());
			this.totalPrice.html(model.getTotalMenuPrice());
			this.removeItemFromMenu = $(".leftdivitem");
			$("#leftdiv3").empty();
			priceToHtml();
		}
	
	}


