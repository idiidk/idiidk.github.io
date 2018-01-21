(function () {
    const socket = io("http://localhost:3000");
    socket.emit("register", "framework");
    console.log("Socket loaded and registered!");
}());
