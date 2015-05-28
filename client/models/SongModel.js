// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('enqueue', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  removeSong: function() {
    this.trigger('removeSong', this);
  },

  addSongToPlaylist: function() {
    this.trigger('addSongToPlaylist', this);
  },

  removeFromPlaylist: function() {
    this.trigger('removeFromPlaylist', this);
  }

});
