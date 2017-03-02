import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { Random } from 'meteor/random';
import { assert } from 'meteor/practicalmeteor:chai';
import { resetDatabase } from 'meteor/xolvio:cleaner';

if (Meteor.isServer) {
  describe('Users', () => {
    describe('methods', () => {

      let insertedUser;

      beforeEach(() => {

        //reset the database before each script
        resetDatabase();
        Meteor.users.remove({});

     });

     //register a new user
      it('register a new users', () => {

        insertedUser = Meteor.users.insert({
         emails: 'dan@hot.com',
         createdAt: new Date(),
         password: 'danilo'
       });

        //check to see if the newly registred user is registered
        assert.equal(Meteor.users.find().count(), 1);
      });
    });
  });
}
