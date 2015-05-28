var PlaylistView = Backbone.View.extend({

tagName: 'table',

className: 'playlist',

template: _.template('<th class="playlist"><%- name %></th>'),

initialize: function() {
  return this.$el.append(this.template(this.model.attributes));
},

render: function(){

  // this.$el.html(this.template(this.model.attributes));
  this.model.get('songs').forEach(this.renderSongs, this);
},

renderSongs: function(song) {
  var playlistSong = new LibraryEntryView({model: song});
  return this.$el.append(playlistSong);
}

});
