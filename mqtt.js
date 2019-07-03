var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://test.mosquitto.org');
var topic   = 'test-topic';   

client.on('connect', function () {
    client.subscribe(topic);

    setInterval(function() {
        client.publish(topic, Date.now().toString());
        console.log('Hola MQTT');
    }, 1000);
});

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(message.toString());
});