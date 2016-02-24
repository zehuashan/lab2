
var SelectDishView = function (container,model) {
 
    var selectDishes = function(type) {   
        var dishes = model.getAllDishes(type);
        var toHtml = "";
     
        for(var i = 0; i < dishes.length; i++) {
            toHtml = '<div class="selects" id="' + dishes[i].id + '">';
            toHtml += '<div class="sImg"><img src="images/' + dishes[i].image + '" alt="' + dishes[i].name + '"></img>';
            toHtml += '<div class="sName">' + dishes[i].name + '</div>';
            toHtml += '<div class="sDisc">' + dishes[i].discription + '</div> </div>';
         
            $("#selectDish").append(toHtml);
        }
    }
    selectDishes('starter');
    model.addObserver(this);
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

                    <hr id="line2">

                    <div class="row-fluid" id="rowimg">
                        <div class="col-md-1"></div>
                        <div class="col-md-2" id="img1"></div>
                        <div class="col-md-2" id="img2"></div>
                        <div class="col-md-2" id="img3"></div>
                        <div class="col-md-2" id="img100"></div>
                        <div class="col-md-2" id="img200"></div>
                        <div class="col-md-1"></div>
                    </div>
                    <div class="row-fluid" id="rowtext">
                        <div class="col-md-1"></div>
                        <div class="col-md-2" id="dish1"></div>
                        <div class="col-md-2" id="dish2"></div>
                        <div class="col-md-2" id="dish3"></div>
                        <div class="col-md-2" id="dish100"></div>
                        <div class="col-md-2" id="dish200"></div>
                        <div class="col-md-1"></div>
                    </div>
                    <div class="row-fluid" id="rowPar">
                        <div class="col-md-1"></div>
                        <div class="col-md-2" id="para1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex dui, bibendum nec dui eu, elementum feugiat nibh. Duis lectus lorem, interdum ac tellus eu, gravida commodo ipsum. </div>
                        <div class="col-md-2" id="para2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex dui, bibendum nec dui eu, elementum feugiat nibh. Duis lectus lorem, interdum ac tellus eu, gravida commodo ipsum. </div>
                        <div class="col-md-2" id="para3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex dui, bibendum nec dui eu, elementum feugiat nibh. Duis lectus lorem, interdum ac tellus eu, gravida commodo ipsum. </div>
                        <div class="col-md-2" id="para100">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex dui, bibendum nec dui eu, elementum feugiat nibh. Duis lectus lorem, interdum ac tellus eu, gravida commodo ipsum. </div>
                        <div class="col-md-2" id="para200">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ex dui, bibendum nec dui eu, elementum feugiat nibh. Duis lectus lorem, interdum ac tellus eu, gravida commodo ipsum.</div>
                        <div class="col-md-1"></div>
                    </div>
                </div>
                </div> */
