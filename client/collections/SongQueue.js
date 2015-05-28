// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model : SongModel,

  initialize: function(){
    this.on('add', this.checkSongs, this);
  },

  playFirst: function() {
    this.at(0).play()
  },

  checkSongs: function(){
    if(this.models.length === 1) {
      this.playFirst();
    }
  },

  playNextSong: function() {
    if(this.models.length > 0) {
      this.playFirst();
    }
  }

});
