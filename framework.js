(function () {
    const socket = io("https://localhost:3000");
    socket.emit("register", "framework");
    console.log("Socket loaded and registered!");
}());
