var PairList = Backbone.Collection.extend({
	model: PairItem,
	url: '/pairs',

	initialize: function(){
		this.on('remove', this.hideModel);
	},

	hideModel: function(model){
		model.trigger('hide');
	}
});

// Example of listen event

// pairList.on('add', function(pairItem){

// });