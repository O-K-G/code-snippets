const express =  require('express');
const app = express();
const port = process.env.PORT ? process.env.PORT : 3000;

app.use(express.static("./client/build"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(port, console.log("Server is listening on port: " + port + "."));