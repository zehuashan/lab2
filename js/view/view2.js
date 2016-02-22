//ExampleView Object constructor
var View2 = function (container,model) {
 
 // Get all the relevant elements of the view (ones that show data
 // and/or ones that responded to interaction)
 
 container.find("#g1 span").html(model.getNumberOfGuests());
 container.find("#dish1").html(model.getDish(1).name);
 container.find("#dish2").html(model.getDish(2).name);
 container.find("#dish3").html(model.getDish(3).name);
 container.find("#dish100").html(model.getDish(100).name);
 container.find("#dish200").html(model.getDish(200).name);
}


/* <div class="leftdiv1" id="view2">
                        <h1>My Dinner</h1>
                        <h3 id="g1">People: <span> 2 </span></h3>
                    <button id="minusGuest" class="btn"><span class="glyphicon glyphicon-minus"></span></button>
                    <button id="plusGuest" class="btn"><span class="glyphicon glyphicon-plus"></span></button>
                    </div>

                    <div class="leftdiv2">
                        <div class="col-sm-6"><p class="leftcontlefttext">Dish Name</p></div>
                        <div class="col-sm-2"></div>
                        <div class="col-sm-4"><p class="leftcontrighttext">Cost</p></div>
                    </div>

                    <div class="leftdiv3">      
                        <div class="col-sm-6"><p class="leftcontlefttext">Pending</p></div>
                        <div class="col-sm-2"></div>
                        <div class="col-sm-4"><p class="leftcontrighttext">0.00 kr</p></div>
                    </div>

                    <div class="leftdiv4">
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"></div>
                        <div class="col-sm-4"><p class="leftcontrighttext">SEK 0.00</p></div>
                    </div>

                    <div class="leftdiv5">
                    <div class="confirmbtn">
                      <button type="button" class="btn btn-secondary">Confirm Dinner</button>
                    </div>
                  </div> */