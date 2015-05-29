// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());
    this.set('currentPlaylist', new PlaylistModel());
    this.set('playlists', new Playlists());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */


    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    this.get('playlists').on('setCurrent', function(model){
      debugger;
      this.set('currentPlaylist', model);
    }, this);

    params.library.on('enqueue', function(song){
      this.push(song);
    }, this.get('songQueue'));

    params.library.on('dequeue', function(){
      this.shift();
      this.playNextSong();
    }, this.get('songQueue'));

    params.library.on('removeSong', function(song) {
      this.get('songQueue').remove(song);
      if(this.get('songQueue').models.length === 0) {
        this.set('currentSong', null);
      }
    }, this);


    // //these need to change!
    params.library.on('addToPlaylist', function(song){
      this.get('currentPlaylist').addSong(song);
      // debugger;
      // this.on('addToPlaylist', function(playlist) {
      //   debugger;
      //   playlist.addSong(song);
      // });
      // //this.models
      // //iterate through models
      // //check if model.name === dropdown.name, if so add to that playlist

      // // this.at(0).addSong(song);
    }, this);

    // params.library.on('removeFromPlaylist', function(song) {
    //   this.at(0).removeSong(song);
    // }, this.get('playlists'));
  }

});
