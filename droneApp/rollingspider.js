/**
 * cylon-rolling-spider example
 * http://cylonjs.com
 *
 * Copyright (c) 2015 Chris Taylor
 * Licensed under the MIT License (MIT).
 */
'use strict';

var pubnub = require("pubnub")({
	ssl: true, // <- enable TLS Tunneling over TCP
	publish_key: "pub-c-....-bd09a3eff137",
	subscribe_key: "sub-c-....-02ee2ddab7fe"
});

var RollingSpider = require("rolling-spider");
var rollingSpider = new RollingSpider('d2edda91562142e988ffcb4a595f8cd9');
var temporal = require('temporal');
// NEW CODE BELOW HERE

rollingSpider.connect(function() {
	rollingSpider.flatTrim();
	rollingSpider.startPing();
	rollingSpider.flatTrim();
	console.log('Connected to drone', rollingSpider.name);

	pubnub.subscribe({
		channel: "my_channel",
		callback: function(message) {
			console.log(" > ", message);
			console.log(message.command);

			switch (message.command) {
				case "initiate":
					//code block
					console.log("initiate");
					rollingSpider.flatTrim();
					rollingSpider.startPing();
					rollingSpider.flatTrim();
					break;
				case "takeOff":
					//code block
					console.log("take Off");
					rollingSpider.takeOff();
					rollingSpider.flatTrim();

					break;
				case "land":
					//code block
					rollingSpider.land();
					break;
				default:
					//default code block
			}
		}
	});
});

/*
var Cylon = require('cylon');

Cylon.robot({

	connections: {
		'rolling-spider': {adaptor: 'rolling-spider', uuid: 'd2edda91562142e988ffcb4a595f8cd9'}
	},

	devices: {
		drone: {driver: 'rolling-spider'}
	},

	work: function (my) {

		my.drone.wheelOn();
		my.drone.flatTrim();
		*/

/*my.drone.wheelOn();

my.drone.flatTrim();

my.drone.takeOff();

after(2500, function () {

	my.drone.land();

	after(1500, function () {

		Cylon.halt();

	});

});*/

/*
my.leap.on('frame', function(frame){
	//console.log('frame');
	if(frame.hands.length > 0){
		my.drone.takeOff();
		console.log('take off');
	} else {
		my.drone.land();
		console.log('land');
	}

	if(frame.valid && frame.gestures.length > 0){
		frame.gestures.forEach(function(g){
			if(g.type == 'swipe'){
				var currentPosition = g.position;
				var startPosition = g.startPosition;

				var xDirection = currentPosition[0] - startPosition[0];
				var yDirection = currentPosition[1] - startPosition[1];
				var zDirection = currentPosition[2] - startPosition[2];

				var xAxis = Math.abs(xDirection);
				var yAxis = Math.abs(yDirection);
				var zAxis = Math.abs(zDirection);

				var superiorPosition  = Math.max(xAxis, yAxis, zAxis);

				if(superiorPosition === xAxis){
					if(xDirection < 0){
						console.log('LEFT');
						my.drone.left({steps: 1});
					} else {
						my.drone.right({steps: 1});
						console.log('RIGHT');
					}
				}

				if(superiorPosition === zAxis){
					if(zDirection > 0){
						console.log('BACKWARDS');
						my.drone.backward({steps: 1});
					} else {
						console.log('FORWARD');
						my.drone.forward({steps: 1});
					}
				}

				if(superiorPosition === yAxis){
					if(yDirection > 0){
						console.log('UP');
						my.drone.up({steps: 1});
					} else {
						console.log('DOWN');
						my.drone.down({steps: 1});
					}
				}
			} else if(g.type === 'keyTap'){
				my.drone.backFlip();
				after((5).seconds(), function(){
					my.drone.land();
					console.log('land');
				})
			}
		})
	}
})*/
/*}

}).start();
*/
