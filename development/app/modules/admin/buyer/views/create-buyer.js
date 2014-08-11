// create buyer.js
// --------------
// Requires define
// Return Backbone View {Object}

define([
<<<<<<< HEAD:development/app/modules/admin/buyer/views/create-buyer.js
	"buyer/views/buyer-form", 
	"../models/create-buyer",
	 "../views/transactions"
], function(
	BuyerFormView, 
	createBuyerModel,
=======
	"buyer/views/buyer-form",
	"adminManageBuyer/models/user-info",
	"adminManageBuyer/views/transactions"
], function(
	BuyerFormView,
	userModel,
>>>>>>> a06a7544b10491cdc17d256613d1ade5caa7051c:development/app/modules/admin-buyer/views/edit-user.js
	TransactionsView
) {

	return BuyerFormView.extend({
<<<<<<< HEAD:development/app/modules/admin/buyer/views/create-buyer.js
		el : undefined,
		// set the submit button text
		submitButtonText : "Create Buyer",
		
		// add schema to common schema
		addSchema: {
			'needQuestionnaire': {
				type : 'Checkbox',
				title : "Questionnaire"				
=======
		addSchema: {
			'needQuestionnaire': {
				type: 'Checkbox',
				title: "need Questionnaire"
>>>>>>> a06a7544b10491cdc17d256613d1ade5caa7051c:development/app/modules/admin-buyer/views/edit-user.js
			},

			'isBanned': {
				type: 'Checkbox',
				title: "Banned"
			},

			'accountVerified': {
<<<<<<< HEAD:development/app/modules/admin/buyer/views/create-buyer.js
				type : 'Checkbox',
				title : "Verified"				
			},
			
			'doNotSendEmail': {
				type : 'Checkbox',
				title : "Do Not Send Welcome Email"				
			}
		},
		
		handleModelSuccessError: function(model) {
			this.listenTo(model, 'sync', function(response) {
				var msg = (this.userId)?"User updated successfully.":"Buyer created successfully.";
				App.Mediator.trigger("messaging:showAlert", msg, "Green");
				history.back(-1);
			}.bind(this));
		},
		
=======
				type: 'Checkbox',
				title: "Verified"
			}
		},

		submitButtonText: "Edit User",

		handleModelSuccessError: function(model) {
			this.listenTo(this.model, 'sync', function(response) {
				App.Mediator.trigger("messaging:showAlert", "User updated successfully.", "Green");
				App.routing.navigate("admin/dashboard", {
					trigger: true
				});
			}.bind(this));
		},

>>>>>>> a06a7544b10491cdc17d256613d1ade5caa7051c:development/app/modules/admin-buyer/views/edit-user.js
		// function handles form submission and success and error handling.
		handleFormSubmit: function(values) {
			this.model.set(values);
			this.model.save();
		},
<<<<<<< HEAD:development/app/modules/admin/buyer/views/create-buyer.js
		
		initializeBefore : function(options) {
=======

		initializeBefore: function(options) {
>>>>>>> a06a7544b10491cdc17d256613d1ade5caa7051c:development/app/modules/admin-buyer/views/edit-user.js
			if (options && options.userId) {
				this.submitButtonText = "Edit";
				this.userId = options.userId;
<<<<<<< HEAD:development/app/modules/admin/buyer/views/create-buyer.js
				this.model = new createBuyerModel({id: this.userId});
=======
				this.model = new userModel({
					id: this.userId
				});
				this.bindModelValidation(this.model);
>>>>>>> a06a7544b10491cdc17d256613d1ade5caa7051c:development/app/modules/admin-buyer/views/edit-user.js
				this.listenTo(this.model, 'sync', function() {
					this.render();
					this.renderTransactions();
				}.bind(this));

				this.listenTo(this.model, 'error', function(model, response) {
					var json = (response.responseText) ? JSON.parse(response.responseText) : {};
					App.Mediator.trigger("messaging:showAlert", json.Error, "Red");
				});

				this.bindModelValidation(this.model);
				this.model.fetch();
			} else {
				this.model = new createBuyerModel();
				this.bindModelValidation(this.model);
			}
		},
<<<<<<< HEAD:development/app/modules/admin/buyer/views/create-buyer.js
		    renderTransactions: function() {
      new TransactionsView({model: this.model}).render();
    }

=======

		renderTransactions: function() {
			new TransactionsView({
				model: this.model
			}).render();
		}
>>>>>>> a06a7544b10491cdc17d256613d1ade5caa7051c:development/app/modules/admin-buyer/views/edit-user.js
	});
});
