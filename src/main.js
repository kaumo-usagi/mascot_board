// var AppearIn = require("appearin-sdk");

var AppearIn = window.AppearIn || require("appearin-sdk");
var appearin = new AppearIn();

var isWebRtcCompatible = appearin.isWebRtcCompatible();

appearin.getRandomRoomName().then(function (roomName) {
    console.log(roomName);
});

var iframe = document.getElementById("video");
var roomName = "honyamorake";
appearin.addRoomToIframe(iframe, roomName);
