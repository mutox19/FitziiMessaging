import { Messages } from '../lib/collections/messages.js';
Template.userPost.events({

  'submit form': function(event){

          //prevent the form for submittting
          event.preventDefault();

          //name the variables
          var firstName = $('[name=firstname]').val();
          var userSubject = $('[name=subject]').val();
          var userMessage = $('[name=message]').val();
          var messageOwner = Meteor.userId();

          //insert new message  and clear the texboxes
          Messages.insert({ firstname: firstName , subject: userSubject, message: userMessage, createdAt: new Date(), owner: messageOwner });
          alert("Your Message has been added, Thank You!");
           $('[name=firstname]').val("");
           $('[name=subject]').val("");
           $('[name=message]').val("");

      }
});
