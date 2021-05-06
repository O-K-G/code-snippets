const express =  require('express');
const app = express();

app.use(express.static("./client/build"));

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

app.listen(process.env.PORT ? process.env.PORT : 3000, console.log("Server is listening on port: " + (process.env.PORT ? process.env.PORT : 3000) + "."));