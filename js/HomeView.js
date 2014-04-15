define(['jquery', 'underscore', 'backbone', 'hammer', 'swipeout'], function($, _, Backbone, Hammer, SwipeOut) {
    console.log(Hammer);
	var HomeView = Backbone.View.extend({
		template: _.template("<ul id='item'><li>First Item</li><li>Second Item</li><li>Third Item></li></ul>"),
		render: function() {
			this.$el.html(this.template);
			var item = document.getElementById('item');
			new SwipeOut(item);
		}
	});

	return HomeView;
});

