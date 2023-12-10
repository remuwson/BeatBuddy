import express from "express";
import fetch from "node-fetch";

const app = express();

app.set("views", "./views");
app.set("view engine", "pug");

app.use(express.static("public"));

const redirect_uri = "ustawic"
const client_id = "fe0d4a6886a14906b01cbb310218a6c2"
const client_secret = "5b5c954a43fb40318d350702ad22def4"

global.access_token;

app.get("/", function (req, res) {
    res.render("index");
});

app.get("/authorize", (req, res) => {
    var auth_query_parameters = new URLSearchParams({
        response_type: "code",
        client_id: client_id,
        scope: "user-library-read",
        redirect_uri: redirect_uri,

    })

    res.redirect("https://accounts.spotify.com/authorize?" + auth_query_parameters.toString());

});

app.get("/callback", async (req, res) => {
    const code = req.query.code;

    var body = new URLSearchParams({
        code: code,
        redirect_uri: redirect_uri,
        grant_type: "authorization_code"
    })

    const response = await fetch("https://accounts.spotify.com/api/token", {
        method: "post",
        body: body,
        headers: {
            "Content-type": "application/x-www-form-urlencoded",
            Authorization:
            "Basic " + Buffer.from(client_id + ":" + client_secret).toString("base64")
        }
    })

    const data = await response.json();
    global.access_token = data.access_token;

    res.redirect("/dashboard")
});

async function gatData(endpoint) {
    const response = await fetch("https://api.spotify.com/v1" + endpoint, {
        method: "get",
        headers: {
            Authorization: "Bearer " + global.access_token
        }
    });

    const data = await response.json();
    return data;
}

app.get("/dashboard", async (req, res) => {

    const userInfo = await getData("/me");
    const tracks = await getData("/me/tracks?limit=10");

    res.render("dashboard", { user: userInfo, tracks: tracks.items})
});

app.get("/recommendations", async (req, res) => {
    const artist_id = req.query.artist;
    const track_id = req.query.track;
    const genre_id = req.query.genre;

    const params = new URLSearchParams({
        seed_artist: artist_id,
        seed_genre: genre_id,
        seed_tracks: track_id,
    })

    const data = await getData('/recommendations?' + params);
    res.render("recommendation", {tracks: data.tracks})
});

let listener = ap.listen(3000, function () {
    console.log(
        "Your app is listening on http://localhost:" + listener.address().port
    );
});