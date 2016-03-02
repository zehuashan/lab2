var SelectController = function(view, model, masterController) {

    $("#dishcontent").on("click", "a", function() {
    	model.trackId(this.id);
    	//console.log(model.giveId() + ":ID");
        masterController.showDetail();
    });


    $('#Searchhere2').on('keyup keypress', function(e) {
    	var keyword = $(this).val();
  		var keyCode = e.keyCode || e.which;
  		if (keyCode === 13) { 
  			if(keyword == "") {
  				model.getAllDishes();
  			} else {
  				model.getRecipeJson(keyword);
  			} 
  		}
	});
    
    $("select").change(function() {
        var type = $(this).find('option:selected').text();

        $(".col-md-3").each(function(){
        	$(this).hide();

        	if($(this).hasClass(type)){
        		$(this).show();
        	}
        	if(type == 'All') {
        		$(this).show();
        	}
        });
    });
}