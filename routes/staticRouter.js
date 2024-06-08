const express = require('express');
const router = express.Router();
const URL = require('../models/url');
const User = require('../models/user')
const { name } = require('ejs');

router.get("/", async (req, res) => {
    try {
        if(!req.user) return res.redirect('/login')
        const allUrls = await URL.find({generatedBy: req.user._id});
        const user = await User.findById(req.user._id, 'name'); 
        return res.render("home", {
            urls: allUrls,
            userName: user ? user.name : 'Unknown'
        });
    } catch (error) {
        console.error("Error fetching URLs:", error);
        return res.status(500).send("Internal Server Error");
    }
});

router.get('/signup', (req,res) => {
    return res.render('signup')
})

router.get('/login', (req,res) => {
    return res.render('login')
})

module.exports = router;
