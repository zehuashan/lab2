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
			if(menu[key].type == type) {
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
            for(i in menu[key].ingredients) {
                allIngredients.push(menu[key].ingredients[i]);
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
            totalPrice += allIngredients[key].price;
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

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(inDish) {
		//TODO Lab 2
        var dish = inDish;
        for(key in menu) {
        	if(menu[key].Category == dish.Category) {
        		this.removeDishFromMenu(menu[key].RecipeID);
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
	var apiKey = "1hg3g4Dkwr6pSt22n00EfS01rz568IR6";

    //pass id and addDishToMenu
	this.getDish = function (id, cb) {
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
            	//cb(null, data);
            	model.notifyObservers(data);
            	console.log("getDish:" + data);
            }
        });
	}

	//
	this.getAllDishes = function (id, cb) {
		model = this;
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                //alert('success');
                //cb(null, data);
                model.notifyObservers(data);
                console.log(data);
            }
        });
    }	
}



