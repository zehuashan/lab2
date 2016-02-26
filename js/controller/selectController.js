var SelectController = function(view, model, masterController) {
    view.sImg.click(function() {
        model.trackId(this.id);
        masterController.showDetail();
    });

    $("#Searchhere2").keyup(function () {
        var filter = $(this).val();
        var type = $("select").find('option:selected').text().toLowerCase();
        $(".col-md-3").each(function() {
        	var data = $(this).find('h5').text();
        	$(this).hide();
        	if (data.search(new RegExp(filter, "i")) >= 0 && $(this).hasClass(type)) {
                $(this).show();
            };
    });
    });
    
    $("select").change(function() {
        var type = $(this).find('option:selected').text().toLowerCase();
        console.log(type);

        $(".col-md-3").each(function(){
        	$(this).hide();

        	if($(this).hasClass(type)){
        		$(this).show();
        	}
        });
    });
}