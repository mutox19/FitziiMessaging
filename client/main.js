import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Messages } from '../lib/collections/messages.js';

import './homepage.html';


Template.navbar.helpers({
//check to see if there is a user logged in
  'userLogged': function()
  {
     var user = Meteor.userId();
     if(user)
     {
       return true;
     }
     else
     {
       return false;
     }
  }
});


Template.viewMessages.helpers({
  //creates a helper function to return specific user messages
    'userMess': function(){
        return Messages.find({owner: Meteor.userId()}, {sort: {createdAt: -1}}).fetch();
    }
});


Template.viewMessages.events({
  'click #remove': function(){
    //call the delete message method to delete specific message
    Meteor.call('DeleteMessage', this._id);
  }
});
