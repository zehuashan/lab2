$(function() {
	//We instantiate our model
	var model = new DinnerModel();

	var createDinnerView = new CreateDinnerView($("createDinner"), model)
	var selectDishView = new SelectDishView($("#selectDish"), model);
	var sidebar = new Sidebar($("#sidebar"), model);
	var overviewView = new OverviewView($("#overview"), model);
	var dishDetailView = new DishDetailView($("#dishDet"),model);
	var dishPrepView = new DishPrepView($("#dishPrev"),model);
	
	var views = [createDinnerView, selectDishView, sidebar, overviewView, dishDetailView, dishPrepView];

	var masterController = new MasterController(views, model)
	var createDinnerController = new CreateDinnerController(createDinnerView, model,masterController);
	var selectController = new SelectController(selectDishView, model,masterController);
	var sidebarController = new SidebarController(sidebar, model,masterController);
	var overviewController = new OverviewController(overviewView, model,masterController);
	var dishDetailController = new DishDetailController(dishDetailView, model,masterController);
	var dishPrepController = new DishPrepController(dishPrepView, model,masterController);

});