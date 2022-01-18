const router = require("express").Router();

const { getGoogleReviews } = require('../utils/api.js')

router.get('/reviews', async (req, res) => {
    const reviews = await getGoogleReviews()
    if (!reviews) return console.error('Error getting reviews' + error)
    return res.send(reviews.result)
})

module.exports = router;