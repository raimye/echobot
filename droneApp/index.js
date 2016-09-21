var PubNub = require("pubnub")

var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
	// Create an Led on pin 13
	//var led = new five.Led(13);
	// Blink every half second
	//led.blink(500);

	led = new five.Led(5);

	//led.strobe( 1000 );
	//this.repl.inject({
	//	led: led
	//});
	//console.log("You can interact with the bargraph via the variable 'led'");
	//console.log("e.g. led.stop();\n Hit control-d to exit.\n >> ");

	pubnub = new PubNub({
			ssl: true, // <- enable TLS Tunneling over TCP
			publish_key: "pub-c-efa67c83-2f0f-416d-9b0a-12ed14696ae4",
			subscribe_key: "sub-c-fc6f1b50-7e99-11e6-8a0d-0619f8945a4f",
			logVerbosity: true
		});
	pubnub.subscribe({
		channel: "my_channel",
		callback: function(message) {
			console.log(" > ", message);
			console.log(message.command);
			led.blink(500);
		}
	});
});
