const express = require("express");
const path = require("path")
const { connectToMongoDB } = require('./connection')
const cookieParser = require('cookie-parser')
const URL = require("./models/url")
const { restrictToLoggedinUserOnly, checkAuth } = require('./middleware/auth')
const staticRoute = require('./routes/staticRouter')
const urlRoute = require("./routes/routes")
const userRoute = require("./routes/user")


const app = express()
const PORT = process.env.PORT || 8000;



connectToMongoDB('mongodb://localhost:27017/url-shortener').then(() => {
    console.log('MongoDB Successfully Connected');
})

//ejs 
app.set('view engine', "ejs");
app.set('views', path.resolve("./views"))

app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser());

app.use("/url", restrictToLoggedinUserOnly, urlRoute);
app.use('/user', userRoute)
app.use("/",checkAuth, staticRoute);


app.get("/url/:shortId", async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const entry = await URL.findOneAndUpdate({
            shortId
        }, {
            $push: {
                visitHistory: {
                    timestamp: Date.now()
                }
            }
        });

        if (entry && entry.redirectURL) {
            res.redirect(entry.redirectURL);
        } else {
            // Handle the case when entry is null or redirectURL is not available
            res.status(404).send("URL Not Found");
        }
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT} is listening...`);
})