const { WebcController } = WebCardinal.controllers;

export default class DashboardController extends WebcController {
	constructor(...props) {
		super(...props);

		this.model = {
			shipmentsArrayNotEmpty: false
		};

		this.init();
		this.attachAll();
	}

	init() {
	}

	attachAll() {
	}
}
