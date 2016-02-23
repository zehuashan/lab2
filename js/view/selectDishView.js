
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