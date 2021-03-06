var DinnerModel = function () {
 
	//TODO Lab 2 implement the data structure that will hold number of guest
	// and selected dinner options for dinner menu
	var numberOfGuests = 4;
	this.observers = [];
    var savedDish = 1;
    
    this.trackId = function(id) {
        savedDish = id;
        this.notifyObservers();
    }
    
    this.giveId = function() {
        return savedDish;
    }
	
	var menu = [];

    this.notifyObservers = function(obj) {
		for(var i=0; i<this.observers.length; i++) {
			//console.log(this.observers[i]);
			 if(obj) {
                this.observers[i].update(obj);
            } else {
                this.observers[i].update();
            }
		}	
	}

	this.addObserver = function(observer) {
		this.observers.push(observer);
	}

	this.setNumberOfGuests = function (num) {
		//TODO Lab 2
		if (num > 0) {
		numberOfGuests = num;
		this.notifyObservers();
		}
	}

	// should return 
	this.getNumberOfGuests = function () {
		//TODO Lab 2
		return numberOfGuests;
	}

	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function (type) {
		//TODO Lab 2
		for(key in menu) {
			if(menu[key].Category == type) {
				return menu[key];
			}
		}
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function () {
		//TODO Lab 2
        return menu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		//TODO Lab 2
        var allIngredients = new Array();
        for (key in menu) {
            for(i in menu[key].Ingredients) {
                allIngredients.push(menu[key].Ingredients[i]);
            }
        }
        return allIngredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		//TODO Lab 2
        var totalPrice = 0;
        allIngredients = this.getAllIngredients();
        for (key in allIngredients) {
            totalPrice += allIngredients[key].Quantity;
        }
        return totalPrice * numberOfGuests;
	}

	this.getDishPrice = function (inDish) {
		var price = 0;
		for (key in inDish.Ingredients) {
			price += inDish.Ingredients[key].Quantity;
		}
		price = price * numberOfGuests;
		return price;
	}

	this.addDishHelp = function(id) {
		this.getDish(id, addDishToMenu);
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	function addDishToMenu(inDish) {
		//TODO Lab 2
        var dish = inDish;
        for(key in menu) {
        	if(menu[key].Category == dish.Category) {
        		delete menu[key];
        	}
        }
        menu.push(dish);
        this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 2
        for(key in menu) {
        	if(menu[key].RecipeID == id) {
        		delete menu[key];
        	}
        }
		this.notifyObservers();
	}

	this.getDishName = function (id) {
		for (key in dishes) {
			if(dishes[key].RecipeID == id) {
				return dishes[key].Title;
			}
		}
	}
	
	// ---------------------------------Lab 4 starts here!-------------------------------------

	// API key for BigOven data.
	var apiKey = "H9n1zb6es492fj87OxDtZM9s5sb29rW3";

    //pass id and addDishToMenu
	this.getDish = function (id, cb) {
		$('#loading-image1').show();
		model = this;
		var recipeID = id;
		var url = "http://api.bigoven.com/recipe/" + recipeID + "?api_key="+apiKey;
		$.ajax({
        	type: "GET",
         	dataType: 'json',
         	cache: false,
         	url: url,
         	success: function (data) {
            	//alert('success');
            	try{
            		cb(data);
            	} catch(err) {
            		//something
            	}
            	model.notifyObservers(data);
            },
            error: function(){
    			alert('error! could not get dish data from server');
  			},  			
  			complete: function(){
  				$('#loading-image1').hide();
  			}
        });
	}


	this.getRecipeJson = function(keyword) {
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&title_kw="
                  + keyword 
                  + "&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                //alert('success');
                //console.log(data);
                model.notifyObservers(data);
            }
        });
    }

	this.getAllDishes = function (id, cb) {
		$('#loading-image').show();
		model = this;
		var pg = 1;
		var rpp = 25;
        var url = "http://api.bigoven.com/recipes?pg="+ pg +"&rpp="+ rpp +"&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                //alert('success');
                //cb(null, data);
                if (data.StatusCode==403){
                	alert('error! could not retrieve data');
                }
                model.notifyObservers(data);
            },
            error: function(){
    			alert('error! could not get data from server');
  			},
  			complete: function(){
  				$('#loading-image').hide();
  			}
        });
    }	
}



