# ngMaxLength
Display the remaining characters of an Angular input field.


### Angular Max Length

This directive extends the existing ng-max-length directive to expose `remainingChars` on the current field scope.

#### Usage

You need to include the ```ng-max-length.js``` file.


	// Load the directive
	<script src="angular.js"></script>
	<script src="ng-max-length.js"></script>
	<script src="ng-app.js"></script>

	// In your controller
	// Include the module in your app
	var ngMyApp = angular.module('myApp', ['fmNgMaxLength']);

#### Requirements

* AngularJs (Tested against 1.5.0)
