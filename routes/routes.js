const express = require('express')
const { handleGetAnalytics, handleGenerateShortUrl, } = require("../controllers/controllers")

const router = express.Router()


router.post('/', handleGenerateShortUrl)
router.get('/analytics/:shortId', handleGetAnalytics)


module.exports = router;