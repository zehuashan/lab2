//ExampleView Object constructor56
var OverviewView = function (container,model) {
	this.container = container;
	this.backButton = $("#back1");
	this.goToPrep = $("#goToPrep");
	this.numberOfGuests = container.find(".statustext span");
	this.totalPrice = container.find("#totPrice span");
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalPrice.html(model.getTotalMenuPrice()); 
	this.menuList = model.getFullMenu();
	
	var overviewToHtml= function(arg){        
	var toHtml = "";    
        for(var i = 0; i < menuList.length; i++) {
            if(menuList[i] != undefined) {
			toHtml = '<div class="col-md-4" id="' + menuList[i].id + '">';
            toHtml += '<div class="sImg"><img src="images/' + menuList[i].image + '" alt="' + menuList[i].name + '"></img></div>';
            toHtml += '<div class="sName">' + menuList[i].name + '</div>';
            toHtml += '<h1 class="menuviewitem">' + model.getDishPrice(menuList[i].id) + 'kr</h1></div>';
            $("#menuviewinner").append(toHtml);
            } else {
                $("#menuviewinner").append("");
            }
        }
	}

	overviewToHtml();
	
	model.addObserver(this)
	this.update = function(arg){
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.totalPrice.html(model.getTotalMenuPrice());
	$("#menuviewinner").empty();
	overviewToHtml();

	}
}