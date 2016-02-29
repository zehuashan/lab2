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

	this.getDishPrice = function (id) {
		for (key in dishes) {
			if (dishes[key].id == id) {
				var pris = 0;
				for (ingredient in dishes[key].ingredients) {
					pris += dishes[key].ingredients[ingredient].price;
				}
				pris = pris*numberOfGuests;
				return pris;
			};
		}
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		//TODO Lab 2
        var dish = this.getDish(id);
        for(key in menu) {
        	if(menu[key].type == dish.type) {
        		this.removeDishFromMenu(menu[key].id);
        	}
        }
        menu.push(dish);
        this.notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		//TODO Lab 2
        for(key in menu) {
        	if(menu[key].id == id) {
        		delete menu[key];
        	}
        }
		this.notifyObservers();
	}

	this.getDishName = function (id) {
		for (key in dishes) {
			if(dishes[key].id == id) {
				return dishes[key].name;
			}
		}
	}
	
	// ---------------------------------Lab 4 starts here!-------------------------------------

	// API key for BigOven data.
	var apiKey = "1hg3g4Dkwr6pSt22n00EfS01rz568IR6";

    //function that returns a dish of specific ID
	this.getDish = function (id) {
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
            	model.notifyObservers(data);

            	//console.log(data);
            }
        });
	}

	//Get dish from search keyword.
	this.getAllDishes = function () {
		model = this;
        var url = "http://api.bigoven.com/recipes?pg=1&rpp=25&api_key="+apiKey;
        $.ajax({
            type: "GET",
            dataType: 'json',
            cache: false,
            url: url,
            success: function (data) {
                //alert('success');
                model.notifyObservers(data);
                //console.log(data);
            }
        });
    }	
}



