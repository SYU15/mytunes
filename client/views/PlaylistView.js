var PlaylistView = Backbone.View.extend({

tagName: 'table',

className: 'playlist',

initialize: function() {
  this.render();
  this.model.get('songs').on('add', this.render, this);
  this.model.get('songs').on('remove', this.render, this);
},

render: function(){
  this.$el.children().detach();

  var name = this.model.get('name');

  return this.$el.html('<th>' + name + '</th>').append(
    this.model.get('songs').map(function(song){
      return new PlaylistEntryView({model: song}).render();
    })
  );
}

});
