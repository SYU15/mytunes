var PlaylistModel = Backbone.Model.extend({

  addSong: function(song) {
    this.get('songs').add(song);
  },

  removeSong: function(song) {
    this.get('songs').remove(song);
  },

  setCurrent: function() {
    this.trigger('setCurrent', this);
  },

  removeFromPlaylist: function() {
    this.trigger('removeFromPlaylist', this);
  }
 });
