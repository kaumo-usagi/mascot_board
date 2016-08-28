import AppearIn from "appearin-sdk";

var demoElement = document.getElementById("video");
var iframe = document.createElement("iframe");
var appearin = new AppearIn();
appearin.getRandomRoomName().then(function (roomName) {
  appearin.addRoomToIframe(iframe, roomName);
});
demoElement.appendChild(iframe);

console.log("honyamorake")
