var AddPlaylistView = Backbone.View.extend({

  template: _.template('<form action="#" id="addPlaylist" method="post"> \
                          <input type="text" name="playlistName" id="playlistName"/>  \
                          <input type="submit" name="submit" class="submit"/> \
                        </form>'),

  initialize: function(){
    this.render();
  },

  events: {
    'submit #addPlaylist' : 'handleSubmit'
  },

  handleSubmit: function(e) {
    debugger;
    e.preventDefault();
    var $name = this.$('#playlistName');
    this.collection.add({
      name: $name.val(),
      songs: new Songs()
    });
    $name.val('');
  },

  render: function(){
    this.$el.html(this.template);
  }
});
