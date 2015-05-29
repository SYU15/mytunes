var PlaylistNameView = Backbone.View.extend({
  tagName: 'option',

  initialize: function() {
    this.on('click', this.addToPlaylist, this);
  },

  addToPlaylist: function() {

  },

  render: function() {
    // debugger;
    var name = this.model.get('name');
    return this.$el.html(name);
  }
});
