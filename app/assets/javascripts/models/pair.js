var PairItem = Backbone.Model.extend({
	urlRoot: '/pairs',
	defaults: {food: 'Raw Boar', beer: 'Mead', beer_type: 'Strong Ale'},

	initialize: function(){

	},

	changeFood: function() {
		this.set({'food': 'Live Bear'});
		this.save();
	}


});