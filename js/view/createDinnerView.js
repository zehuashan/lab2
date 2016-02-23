var CreateDinnerView = function (container,model) {

	var str = '<h1 class="floattitle">A Home Dinner Service</h1>';
		str += '<p class="floattext"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum </p>';
		str += '<p class="startquickly">Start quickly</p>';
		str += '<div class="bottom">';
		str += '<button type="button" id="createButton" class="btn btn-warning">Create new dinner</button></div>"';

	$("#createDinner").append(str);
    
    this.createButton = container.find("#createButton");

	model.addObserver(this)
}