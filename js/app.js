$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	//model.addDishToMenu()

	var selectDishView = new SelectDishView($("#selectDish"), model);
	var selectController = new SelectController(selectDishView, model);

	var sidebar = new Sidebar($("#sidebar"), model);
	var sidebarController = new SidebarController(sidebar, model);

	var overviewView = new OverviewView($("#overview"), model);
	var overviewController = new OverviewController(overviewView, model);

	var dishDetailView = new DishDetailView($("#dishDet"),model);
	var dishDetailController = new DishDetailController(dishDetailView, model);

	var dishPrepView = new DishPrepView($("#dishPrev"),model);
	var dishPrepController = new DishPrepController(dishPrepView, model);

	var createDinnerView = new CreateDinnerView($("createDinner"), model)
	var createDinnerController = new CreateDinnerController(createDinnerView, model);

});