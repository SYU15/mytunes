// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  model : SongModel,

  initialize: function(){
    this.on('add', this.checkSongs, this);
  },
  checkSongs: function(){
    if(this.models.length === 1) {
      this.at(0).play();
    }
  }
});
