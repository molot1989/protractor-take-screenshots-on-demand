#Protractor take screenshots on demand 
Protractor take screenshots on demand  makes screenshot in any place where it is needed

#Usage 
The protractor-take-screenshots-on-demand is available via npm:

$ npm install protractor-take-screenshots-on-demand --save-dev


In your Protractor configuration file, register protractor-take-screenshots-on-demand 

<pre><code>var screenshots = require('protractor-take-screenshots-on-demand');

exports.config = {
   // ...

   // Assign the test reporter to each running instance
   onPrepare: function() {
      screenshots.screenShotDirectory = 'target/screenshots';
      screenshots.createDirectory();

   },

}</code></pre>

