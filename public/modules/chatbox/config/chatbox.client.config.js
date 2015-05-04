'use strict';

// Configuring the Articles module
angular.module('chatbox').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Chatbox', 'chatbox', '/chatbox');
	//	Menus.addSubMenuItem('topbar', 'photos', 'New Photo', 'photos/create');
	}
]);
