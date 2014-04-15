require.config({
  paths: {
    underscore : '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min',
    backbone   : '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
    jquery     : '//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.0/jquery.min',
    hammer     : '//cdnjs.cloudflare.com/ajax/libs/hammer.js/1.0.6/hammer',
    swipeout   : 'lib/swipeout'
  },
  shim: {
    underscore:{
     	exports: '_'
    },
    backbone:{
    	deps:[ 'underscore', 'jquery'],
        exports: 'Backbone'
    },
    jquery: {
    	exports: '$'
    },
	swipeout: {
		exports: 'SwipeOut'
	}
  },
  waitSeconds: 30
});
 
require(['app'], function (App) {
  'use strict';

  App.initialize();
});
