import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import { Messages } from '../lib/collections/messages.js';
import {chai} from 'meteor/practicalmeteor:chai';
import { deleteTask } from '../server/main.js';


if (Meteor.isServer) {
  describe('Messages', () => {
    describe('methods', () => {

      const userId = Random.id();
      let messageID;
      const assert = chai.assert;

      beforeEach(() => {

        //reset the database and remove all messages
        //before inserting a new message
        resetDatabase();
        Messages.remove({});
        messageID = Messages.insert({
         message: 'test message',
         createdAt: new Date(),
         owner: userId,
         firstname: 'test name',
         subject: 'test subject'
       });

     });

//delete a message that was previously added by user
      it('deletes a message', () => {

        const deleteMessage = Meteor.server.method_handlers['DeleteMessage'];

        const invocation = { userId };

        deleteMessage.apply(invocation, [messageID]);
        // Verify that the method does what we expected
        assert.equal(Messages.find().count(), 0);
      });

      //add a second message
      it('Adds a second message', () => {

          let messageID2;

          messageID2 = Messages.insert({
           message: 'test message2',
           createdAt: new Date(),
           owner: userId,
           firstname: 'test name2',
           subject: 'test subject2'
         });
         //check to see that there is a second message
         assert.equal(Messages.find().count(), 2);

      });

      //find a message from the current user
      it('finds a messages', () => {

          let findUser;

           findUser = Messages.find({owner: userId});
           //check to see that there is a message
           assert.equal(Messages.find({owner: userId}).count(), 1);
      });
    });
  });

}
