var PairItem = Backbone.Model.extend({
	urlRoot: '/pairs',

	changeFood: function() {
		this.set({'food': 'Live Bear'});
		this.save();
	}
});