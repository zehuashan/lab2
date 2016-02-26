var SelectController = function(view, model, masterController) {
    view.sImg.click(function() {
        model.trackId(this.id);
        masterController.showDetail();
    });
    
    //view.dishform.change(function() {
     //   view.course
   // });
}