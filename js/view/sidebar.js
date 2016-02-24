//ExampleView Object constructor
var Sidebar = function (container,model) {
 	
 	this.container = container;
    this.numberOfGuests = container.find("#numberOfGuests");
	//this.numberOfGuests = container.find(".numberOfGuests2");
	//this.plusButton = container.find("#plusGuest");
	//this.minusButton = container.find("#minusGuest");
	
	this.plusButton = $("#plusGuest");
	this.minusButton = $("#minusGuest");
	this.numberOfGuests.html(model.getNumberOfGuests());
	container.find("#totPrice span").html(model.getTotalMenuPrice());

	var priceToHtml = function() {   
        var menuList = model.getFullMenu();
        var pending = "";
        var toHtml = "";
       if(menuList.length==0){
        	pending = "pending"
        } else {
        	pending = model.getFullMenu();
        }
     
        for(var i = 0; i < menuList.length; i++) {
            toHtml = '<div class="leftdivitem">';
            toHtml += '<div class="col-sm-6"><p class="leftcontlefttext">' + menuList[i].name + '</p></div>';
            toHtml += '<div class="col-sm-2"></div>';
         	toHtml += '<div class="col-sm-4"><p class="leftcontrighttext">' + model.getDishPrice(menuList[i].id); + 'kr</p></div></div>';

            $("#leftdiv3").append(toHtml);
        }
    }
priceToHtml();
    
    model.addObserver(this);
}

