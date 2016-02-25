var SelectController = function(view, model, masterController) {
 
 
    view.sImg.click(function() {
        
        console.log(model.giveId());
        model.trackId(this.id);
        
        masterController.showDetail();
    });

}