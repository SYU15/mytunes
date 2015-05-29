var PlaylistDropdownView = Backbone.View.extend({

  tagName: 'div',

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    return this.$el.append(this.collection.map(function(playlist){
      return new PlaylistNameView({model: playlist}).render();
    }));
  }
});
