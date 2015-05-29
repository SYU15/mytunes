// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td class="song">(<%= artist %>)</td><td class="song"><%= title %></td><td><img class="addToPlaylist" src="assets/plus.png"/></td>'),

  events: {
    'click .song': 'enqueue',
    'click .addToPlaylist': 'addToPlaylist'
  },

  enqueue: function() {
    this.model.enqueue();
  },

  addToPlaylist: function() {
    this.model.addToPlaylist();
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
