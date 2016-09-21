## Synopsis

This project aims at controlling a Parrot Swing drone using an Amazon Echo.

## Motivation

This project is based on rondadag echobot project (https://github.com/rondagdag/echobot). Since I don't own a Parrot Rolling Spider and the PubNub node.js SDK has evolved, I'm trying to make it compatible with both.

## Installation

1. Create the Alexa Skills using the Utterances and Intents file
2. Create a PubNub account and a new set of keys
3. Modify index.js of the echoApp to include your PubNub keys
3. Create a Lambda function using the echoApp and PubNub node.js SDK (npn install pubnub --save)
4. Link your ARN number to your Alexa Skill endpoint
5. Create a Swing node.js app in Raspberry Pi
6. Edit Swing.js to include your PubNub credentials
7. Run using 
```
node Swing.js
```

## Tests

Run using 
```
node Swing.js
```
## Contributors

Any contribution is welcomed.
