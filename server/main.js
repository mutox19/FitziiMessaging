import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Messages } from '../lib/collections/messages.js';

Meteor.startup(() => {
  // code to run on server at startup

//publish all message
  Meteor.publish('messages', function(){
      return Messages.find();
  });

});

//create meteor methods to be called on client and server
Meteor.methods({
  'DeleteMessage': function (messageID) {
    check(messageID, String);

    // Let other method calls from the same client start running,
    // without waiting for the email sending to complete.
    //this.unblock();
    //remove the specific message
    Messages.remove(messageID);
  }

});
