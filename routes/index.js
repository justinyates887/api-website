const router = require("express").Router();
const path = require('path')
const fs = require('fs')

const { getGoogleReviews, getUsersByDateThirty, getUsersByDateYear, getUsersByCity, getUsersByCountry, getUsersByAge, getUsersByGender} = require('../utils/api.js')
const { mail } = require('../utils/mail')

router.get('/reviews', async (req, res) => {
    const reviews = await getGoogleReviews()
    if (!reviews) return console.log('Error getting reviews')
    return res.send(reviews.result)
})

router.get('/userdata', async (req, res) => {
    const report = []
    const userThirty = await getUsersByDateThirty()
    const userYear = await getUsersByDateYear()
    const userCity = await getUsersByCity()
    const userCountry = await getUsersByCountry()
    const userAge = await getUsersByAge()
    const userGender = await getUsersByGender()

    report.push(userThirty, userYear, userCity, userCountry, userAge, userGender)

    if (!report) return console.log('Error getting report')
    
    return res.send(report)
})


router.post('/access', async (req, res, next) => {
    const mailer = await mail(req.body)
    if(!mailer) res.json({ status: 'fail' })
    else res.json({ status: 'success' })
})

/* Handle Meta */
const pathToIndex = path.resolve(__dirname, 'client', 'public', 'index.html')

router.get('/', (req, res, next) => {
    fs.readFile(pathToIndex, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        
        console.log(htmlData)
        htmlData = htmlData.replace(
            "<title>Title</title>",
            `<title>${meta.home.title}</title>`
        )
        .replace('__META_DESCRIPTION__', meta.home.description)

        return res.send(htmlData)
    })

})

module.exports = router;