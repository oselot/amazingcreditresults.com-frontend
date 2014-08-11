// auth layout.js
// --------------
// Requires define
// Return Backbone View {Object}


define([
	"baseLayout",
	"hbs!../templates/layout",
	"../views/login"
], function(
	BaseLayout,
	templateView,
	loginView
) {

	return BaseLayout.extend({
		template: templateView,
		
		initializeAfter: function(options) {
			this.setViewInLayout('.form-view', new loginView(options));
		}
	});
});
