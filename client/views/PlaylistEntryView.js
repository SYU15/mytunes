var PlaylistEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td><img class="removeFromPlaylist" src="assets/remove.png"/></td><td><img class="addToQueue" src="assets/queue.jpg"/></td>'),

  events: {
    'click .removeFromPlaylist': 'removeFromPlaylist',
    'click .addToQueue': 'enqueue'
  },

  enqueue: function() {
    this.model.enqueue();
  },

  removeFromPlaylist: function() {
    this.model.removeFromPlaylist();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
