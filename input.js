// Stores the active TCP connection object.
let connection;


let handleUserInput = function(data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === "w") {
    connection.write("Move: up");
  }
  if (data === "a") {
    connection.write("Move: left");
  }
  if (data === "s") {
    connection.write("Move: down");
  }
  if (data === "d") {
    connection.write("Move: right");
  }
  if (data === "j") {
    connection.write("Say: Hello");
  }
  if (data === "k") {
    connection.write("Say: Yeet");
  }
  if (data === "l") {
    connection.write("Say: 2 fast 2 code");
  }
};
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = setupInput;