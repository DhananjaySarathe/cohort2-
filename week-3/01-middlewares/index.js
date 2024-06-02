
//Finding the time taken by a route to complete it's request using middlewares
// I used two middlewares to achieve this.

const PORT = 3002;

app.use(express.json());
let startTime = Date.now();
let endTime = Date.now();

function start(req, res, next) {
  startTime = Date.now();
  next();
}

function end(req, res, next) {
  endTime = Date.now();
  console.log(endTime - startTime);
  res.json({
    message: "Hello World",
    time: endTime - startTime,
  });
}

app.get(
  "/",
  start,
  (req, res, next) => {
    let a = 0;
    for (let i = 0; i < 10000000; i++) {
      a = (a + i * a) / a;
    }
    next();
  },
  end,
);

app.listen(PORT, () => {
  console.log(`website is live on port ${PORT}`);
});