const express = require("express");

const app = express();
const port = 8000;

require("./server/config/mongoose.config");

app.get("/api/hello", (req, res) => {
    //res.send("Hello World");
    res.json({message: "Hello World"});
});

app.use(express.json(), express.urlencoded({extended: true}));

const JokeRoutes = require("./server/routes/jokes.routes");
JokeRoutes(app);

app.listen(port, () => {
    console.log(`Express running on port ${port}`);
});
