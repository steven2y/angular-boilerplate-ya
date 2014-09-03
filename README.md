angular-boilerplate-ya
======================

Yep another angular boiler plate with tdd and bdd.  As I am a fan of TDD, it also includes sample testing of a controller and BDD cucumber js testing via protractor.
Also it was good excercise to muck around with AngularJs and RequireJS.

Installation
-------------
```
npm install
bower install
```

Unit Test
---------
```
grunt unit
```


Feature Test
---------
You'll need to host the files somehow for this so I have set up a small node/express web server.  This will run it on localhost:3000

```
grunt serve
```

You will need the selenium jar file located here 
http://selenium-release.storage.googleapis.com/2.42/selenium-server-standalone-2.42.2.jar
this needs to be placed alongside this repo.  NOT within it.

To run the test use

```
grunt cucumber
```



What is the setup?
--------------
This projects contains

* AngularJs
* Bootstrap
* Jquery
* grunt
* bower
* npm
* karma
* jasmine
* phantomjs
* requirejs
* protractor
* cucumberjs



