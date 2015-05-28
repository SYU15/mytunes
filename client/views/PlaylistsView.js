var PlaylistsView = Backbone.View.extend({
  id: 'playlists',

  initialize: function() {
    this.collection.on('add', this.render, this);
    this.collection.on('remove', this.render, this);
  },

  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderPlaylist, this);
  },

  renderPlaylist: function(playlist) {
    var newPlaylist = new PlaylistView({model: playlist});
    return this.$el.append(newPlaylist.render());
  }
});
