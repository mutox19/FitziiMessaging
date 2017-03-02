//route for homepage
Router.route('/', {
  waitOn: function() {
},
  action: function() {
    this.render('homepage');
  },
  onAfterAction: function() {
    document.title = 'Home';
  }
});


//route for posting a new message
Router.route('/postmessage',{
  waitOn: function(){

  },
  action: function(){
    this.render('userPost');
  },
  onAfterAction: function(){
  document.title = 'Post A New Message';
  }
})
