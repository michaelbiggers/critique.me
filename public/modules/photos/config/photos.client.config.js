'use strict';

// Configuring the Articles module
angular.module('photos').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Feed', 'feed', '/photos(/create)?');
		Menus.addSubMenuItem('topbar', 'photos', 'New Photo', 'photos/create');
		Menus.addMenuItem('topbar', 'Create', 'photos/create', '/photos(/create)?');
	}
]);
