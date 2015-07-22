var PairView = Backbone.View.extend({
	id: 'pair-view',
	className: 'pair',
	template: _.template('<h2><%= food %></h2>' +
		'<br>' + '<h2><%= beer %></h2>' + '<br>' + '<h2><%= beer_type %></h2>'),

	events: {
		'click h2': 'alertStatus',
		'dblclick': 'alertStatus',
		'change .beer-selector' : 'changeFood'
	},
	
	alertStatus: function(event) {
		alert('Hey. Stop that');
	},

	updateList: function(event) {
		alert('This might do something later');
	},

	changeFood: function(){
		this.model.changeFood();
	},

	render: function(){
		var attributes = this.model.toJSON();
		this.$el.html(this.template(attributes));
		
	}
});

