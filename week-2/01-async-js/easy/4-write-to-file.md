## Write to a file
Using the fs library again, try to write to the contents of a file.
You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require("fs");

fs.readFile("a.txt", "utf-8", (err, data) => {
  console.log(data);
});

const data = `
Let's se what's get login first
`;

// Asynchronous file write
fs.writeFile("a.txt", data, "utf8", (err) => {
  if (err) {
    console.error("Error writing to file:", err);
    return;
  }
  console.log("File has been written successfully.");
  // Read the file content back to verify
  fs.readFile("a.txt", "utf8", (err, data) => {
    if (err) {
      console.error("Error reading the file:", err);
      return;
    }
    console.log("File content:");
    console.log(data);
  });
});

