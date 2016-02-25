
var SelectDishView = function (container,model) {

	this.container = container;
	this.testbtn = $("#testbtn");

    var selectDishes = function(type) {   
        var dishes = model.getAllDishes(type);
        var toHtml = "";    
        for(var i = 0; i < dishes.length; i++) {
            toHtml = '<a><div class="col-md-3" id="' + dishes[i].id + '">';
            toHtml += '<div class="sImg"><img src="images/' + dishes[i].image + '" alt="' + dishes[i].name + '"></img>';
            toHtml += '<div class="sName">' + dishes[i].name + '</div>';
            toHtml += '<div class="sDisc">' + dishes[i].description + '</div> </div></a>';
            $("#dishcontent").append(toHtml);
        }
    }
    
    
    model.addObserver(this);
	selectDishes('dessert');
    this.sImg = $(".col-md-3");
	
	this.update = function(arg){
		
	}
}

/*<div class="rightcont">
                    <div class="selectdish">
                        <h4>Select dish</h4>
                    </div>
                    <hr>
                <div>
                    <div class="col-md-4">
                        <form class="form-inline">
                            <div class="form-group">
                                <label for="Searchhere2" class="sr-only">Search</label>
                                <input type="search" class="form-control" id="Searchhere2" placeholder="Enter key words">
                            </div>
                            <button type="submit" class="btn btn-default">Go!</button>
                        </form>
                    </div>

                    <div class="col-md-3">
                        <select class="form-control">
                            <option>Starter</option>
                            <option>Main</option>
                            <option>Dessert</option>
                        </select>
                    </div>
*/