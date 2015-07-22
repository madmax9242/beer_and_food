var PairApp = new (Backbone.Router.extend({
	routes: { 
		"": "index",
		"pairs/:id": 'show' 
	},

	initialize: function(){
		this.pairList = new PairList();
		this.pairListView = new PairListView({collection: this.pairList});
		// $('#app').append(this.todosView.el);
	},

	start: function(){
		Backbone.history.start({pushState: true});
	},

	index: function(){
		this.pairList.fetch();
	},

	show:function(id){
		this.pairList.focusOnPairItem(id);
	},

	
}));

$(function() {
	PairApp.start();
})