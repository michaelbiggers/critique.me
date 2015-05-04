'use strict';

//Setting up route
angular.module('chatbox').config(['$stateProvider',
	function($stateProvider) {
		// Photos state routing
		$stateProvider.
		state('chatbox', {
			url: '/chatbox',
			templateUrl: 'modules/chatbox/views/chatbox.client.view.html'
		});
	}
]);