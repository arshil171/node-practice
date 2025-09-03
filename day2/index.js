const http = require("http"); // core module
const { sum, sub } = require("./sum"); // local module
const { title } = require("process");

let PORT = 8080;

const server = http.createServer((req, res) => {
  // res.write("hello world")
  //   res.write(
  //     `the sum of number ${sum(10, 3)} and the subtraction is ${sub(30, 20)}`
  //   );
  //   return res.end();

  res.setHeader("Content-Type", "application/json");
  const data = {
    id: "1",
    img: "https://th.bing.com/th/id/OIP.7-zyZ2NnUnnVlzYKB2ym0QHaE7?w=266&h=180&c=7&r=0&o=7&dpr=1.1&pid=1.7&rm=3",
    title: "Nature image",
    price: 2000,
  };
  return res.end(JSON.stringify(data));
});

server.listen(PORT, (err) => {
  if (err) {
    console.log("Server is not running");
  }
  console.log(`server is running at ${PORT}`);
});
