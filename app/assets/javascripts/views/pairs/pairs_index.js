var PairView = Backbone.View.extend({
	id: 'pair-view',
	className: 'pair',
	template: _.template('<h2>Food: <%= food %></h2>' +
		'<br>' + '<h2>Beer: <%= beer %></h2>' + '<br>' + 
		'<h2>Beer Type: <%= beer_type %></h2><hr>'),

	events: {
		'click h2': 'alertStatus',
		'dblclick': 'alertStatus',
		'change .beer-selector' : 'changeFood'
	},

	initialize: function(){
		this.model.on('change', this.render, this);
		this.model.on('destroy', this.remove, this);
	},

	render: function(){
		this.$el.html(this.template(this.model.toJSON()));
		return this;		
	},

	remove: function(){
		this.$el.remove();
	},
	
	alertStatus: function(event) {
		alert('Hey. Stop that');
	},

	updateList: function(event) {
		alert('This might do something later');
	},

	changeFood: function(){
		this.model.changeFood();
	}


});

var pairItem = new PairItem();
var pairView = new PairView({model:pairItem});
var pairList = new PairList({model:pairItem});

var PairListView = Backbone.View.extend({

	initialize: function(){
		this.collection.on('add', this.addOne, this);
		this.collection.on('reset', this.addAll, this);
	},

	render: function(){
		this.collection.forEach(this.addOne, this);
	},

	addOne: function(pairItem){
		var pairView = new PairView({model: pairItem});
		this.$el.append(pairView.render().el);
	},

	addAll: function(){
		alert('Eureka! It worked');
		this.collection.forEach(this.addOne, this)
	}
});

var pairListView = new PairListView({collection:pairList});
pairListView.render();
















