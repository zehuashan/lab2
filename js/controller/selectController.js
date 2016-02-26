var SelectController = function(view, model, masterController) {
    view.sImg.click(function() {
        model.trackId(this.id);
        masterController.showDetail();
    });

    $("#Searchhere2").keyup(function () {
        var filter = $(this).val();
        $(".col-md-3").each(function() {
        	$(this).fadeOut();
        	if ($(this).text().search(new RegExp(filter, "i")) >= 0) {
                $(this).fadeIn();
            };
    });
    });
    
    $("select").change(function() {
        var type = $(this).find('option:selected').text().toLowerCase();
        console.log(type);

        $("a").each(function(){
        	$(this).hide();

        	if($(this).hasClass(type)){
        		$(this).show();
        	}
        });
    });
}