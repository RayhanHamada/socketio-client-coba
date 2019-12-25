import io from "socket.io-client";

const socket = io("http://localhost:3000", {
  autoConnect: true
});

document.getElementById("doEmit")?.addEventListener("click", ev => {
  if (socket.connected) {
    socket.emit("clicked", {
      nama: "Rayhan Hamada"
    });
  } else {
    console.log(`We're not connected`);
  }
});

document.getElementById("doCloseConnection")?.addEventListener("click", ev => {
  if (socket.connected) {
    socket.disconnect();
  } else {
    console.log(`socket already disconnected`);
  }
});

document.getElementById("doOpenConnection")?.addEventListener("click", ev => {
  if (socket.disconnected) {
    socket.connect();
  } else {
    console.log(`socket already connected`);
  }
});
