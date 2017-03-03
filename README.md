# fitziiMessaging

Fitzii Messaging, simple  meteor messaging and mocha testing program.
<br>
<h1>Getting started</h1>
To get started simply download the repo using the link below. All required files are included.
<br>
<h2>Setting up website</h2>

Open up command prompt

Navigate to the root directory and run the following command:

<h4>meteor npm install --save babel-runtime</h4>

After modules are installed to run the program use the command:
<h4>meteor run</h4>
the website will now be shown on:
<a href="http://localhost:3000/">http://localhost:3000/</a>
<h3>How To's</h3>
<p>While on the website you will notice home and sign in. first time users will have to create an account,
while other users can sign in.
</p>
<h3>To Post A Message</h3>
<ul>
  <li>When on the home page you can click post a message which will bring you to the post message page</li>
  <li>by filling out the form and pressing the submit new message button a user can add a new message but
  this can only happen when a user is logged in</li>
  <li>An alert will popup confirming that your post has been added</li>
</ul>
<h3>To Delete a Message</h3>
<p>after you have added a message you can return to the home page by clicking home and you will notice
a list of all your new message sorted
by date</p>
<ul>
<li>You will notice beside each message is a remove link</li>
<li>by clicking the remove link of a specific message a user can remove that specific message only</li>
</ul>
<h2>Setting up (Test Case enviroment)</h2>
Open up command prompt in adminstrator mode
<p>Navigate to the root directory of the program and run the following command:</p>
<h4>meteor test --driver-package practicalmeteor:mocha --port 3100</h4>
After modules are installed, the program will now be shown on:
<a href="http://localhost:3100/">http://localhost:3100/</a>
<h3>Testing The program</h3>
<p>while on the testing website a user can notice that there are four server tests all with green check mark for pass</p>
<ul>
<li>by clicking on a specific test, for example: post a second message. a user will then be brought to a page just for the that test suite.</li>
<li>information regarding the suite test can be view by clicking on the test suite name.</li>
</ul>

<h2>Assumptions regarding specifications:</h2>
<ul>
  <li>did not turn of insecure due to no explicit server-side call and for protyping reasons</li>
  <li>allowed users to register but there only allowed to post a message when they are logged in</li>
  <li>did not use schemas and any css or bootstrap due to only creating a simple base messaging app</li>
</ul>
<h2>Rationale</h2>
  after clearfully reviewing and researching an error while running meteor test with out having
  adminstrator mode on in command prompt.
  follow these links for info on running test case in admin mode
 <ul>
  <li><a href="http://stackoverflow.com/questions/40560723/meteor-windows-10-error-eperm-operation-not-permitted-unlink-dev-bundle">Stackoverflow error eperm</a></li>
  <li><a href="https://forums.meteor.com/t/first-time-testing-with-meteor-eperm-operation-not-permitted/31785/4">Meteor Forums</a></li>
</ul>
