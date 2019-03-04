require("dotenv").config();
const { json } = require("body-parser");
const express = require("express");
const massive = require("massive");
const cors = require("cors");
const {
    getGames,
    getCompletedGames,
    searchGames,
    addNew,
    deleteGame,
    editNote,
    completeGame,
    returnToQueue
} = require("./controllers/games_controller");
const port = process.env.SERVER_PORT;
const app = express();

app.use(json());
app.use(cors());

massive(process.env.CONNECTION_STRING)
    .then(db => {
        app.set("db", db);
        console.log("Database Connected");
    })
    .catch(err => console.log(err));

app.get("/api/games", getGames);
app.get("/api/completedGames", getCompletedGames);
app.get("/api/search", searchGames);
app.post("/api/games", addNew);
app.put("/api/gameStatus/:id", completeGame);
app.put("/api/completedGameStatus/:id", returnToQueue);
app.delete("/api/games/:id", deleteGame);
app.put("/api/games/:id", editNote);

app.listen(port, () => console.log(`Listening on ${port}`));
