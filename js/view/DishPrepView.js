//ExampleView Object constructor56
var DishPrepView = function (container,model) {
	this.container = container;
	this.goToPrep1 = $("#goToPrep1");
	this.numberOfGuests = container.find(".statustext1 span");
	this.numberOfGuests.html(model.getNumberOfGuests());
	this.menuList = model.getFullMenu();
	
	var prepToHtml= function(arg){        
	var toHtml = "";    
        for(var i = 0; i < menuList.length; i++) {
			toHtml = '<div class="dishPrepCont">';
			toHtml +='<div class="prepCont">';
			toHtml +='<div class="prepContPic">'
            toHtml +='<div class="img1"><img src="images/' + menuList[i].image + '" alt="' + menuList[i].name + '"></img></div>';
			toHtml +='</div>';
			toHtml +='<div class="prepContDesc">';
			toHtml +='<h1 id="dishName">' + menuList[i].name + '</h1>';
			toHtml +='<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>';
			toHtml +='</div>';
			toHtml +='<div class="prepContPrep">';
			toHtml +='<h1> Preperation </h1>';
			toHtml +='<p id="prep">' + menuList[i].description + '</p>';
			toHtml +='</div>';
			toHtml +='</div>';
			toHtml +='</div>';
            $("#preperations").append(toHtml);
        }
	}

	prepToHtml();
	
	model.addObserver(this)
	this.update = function(arg){
	this.numberOfGuests.html(model.getNumberOfGuests());
	$("#preperations").empty();
	prepToHtml();

	}
}


/*  <div class="dishPrepCont"> 
    <div class="prepCont"> 
		<div class="prepContPic">
		<div id="img1"> </div>
		</div>
		<div class="prepContDesc">
			<h1 id="dishName"> <span> </span> </h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
			Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
			irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
			Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
		</div>
		<div class="prepContPrep">
		<h1> Preperation </h1>
		<p id="prep"> <span> placeholder </span> </p>		
		</div>
    </div> 
  </div> 
  
  */