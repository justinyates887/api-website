const fetch = require('node-fetch-commonjs');
const path = require('path')
const fs = require('fs')
require ('dotenv');

const meta = require('../meta.json')

async function getGoogleReviews(){
    const key = process.env.PLACES_KEY;
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJV4sNzLKVwIcR7u_sRrkfaSk&fields=review&key=${key}`, {
        method: 'GET',
    });
    return response.json()
}

function handleMeta(app){
    //Dynamically update meta tags
    const pathToIndex = path.join(__dirname, 'client/public/index.html')

    app.get('/', (req, res) => {
        const raw = fs.readFileSync(pathToIndex)
        const updated = raw.replace('__PAGE_META__', `<title>${meta.home.title}</title>\
        <meta name='description' content='${meta.home.description}'/>`)
        res.send(updated)
    })

    app.get('/about/company', (req, res) => {
        const raw = fs.readFileSync(pathToIndex)
        const updated = raw.replace('__PAGE_META__', `<title>${pageTitle}</title>`)
        res.send(updated)
    })
}

module.exports = { getGoogleReviews, handleMeta }
