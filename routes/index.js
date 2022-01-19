const router = require("express").Router();

const { getGoogleReviews } = require('../utils/api.js')
const { mail } = require('../utils/mail')

router.get('/reviews', async (req, res) => {
    const reviews = await getGoogleReviews()
    if (!reviews) return console.error('Error getting reviews' + error)
    return res.send(reviews.result)
})

router.post('/access', async (req, res, next) => {
    const mailer = await mail(req.body)
    if(!mailer) res.json({ status: 'fail' })
    else res.json({ status: 'success' })
})

module.exports = router;