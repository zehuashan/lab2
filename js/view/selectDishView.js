//ExampleView Object constructor
var SelectDishView = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)

 container.find("#menuPrice").html(model.getTotalMenuPrice());
 container.find(".statustext span").html(model.getNumberOfGuests());
 container.find("#menu1 span").html(model.getDishPrice(1));
 container.find("#menu100 span").html(model.getDishPrice(100));
 container.find("#menu200 span").html(model.getDishPrice(200));
 container.find("#totPrice span").html(model.getTotalMenuPrice());

 container.find("#img1").html("<img src='" + 'images/' + model.getDish(1).image + "' alt='" + model.getDish(1).name + "'>");
 container.find("#img2").html("<img src='" + 'images/' + model.getDish(2).image + "' alt='" + model.getDish(2).name + "'>");
 container.find("#img3").html("<img src='" + 'images/' + model.getDish(3).image + "' alt='" + model.getDish(3).name + "'>");
 container.find("#img100").html("<img src='" + 'images/' + model.getDish(100).image + "' alt='" + model.getDish(100).name + "'>");
 container.find("#img200").html("<img src='" + 'images/' + model.getDish(200).image + "' alt='" + model.getDish(200).name + "'>");

 var div = $("<div />", {
 	class: "ny",
 	id: "kaffe"
 
 }).html("hel!");
 console.log(div);

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
                </div>