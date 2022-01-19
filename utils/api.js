const fetch = require('node-fetch-commonjs');
require ('dotenv');

async function getGoogleReviews(){
    const key = process.env.PLACES_KEY;
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJV4sNzLKVwIcR7u_sRrkfaSk&fields=review&key=${key}`, {
        method: 'GET',
    });
    return response.json()
}

module.exports = {getGoogleReviews}
