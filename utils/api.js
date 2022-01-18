const fetch = require('node-fetch-commonjs');

async function getGoogleReviews(){
    const accountId = 'neural-entropy-331819'
    const locationId = 'ChIJV4sNzLKVwIcR7u_sRrkfaSk'
    const response = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJV4sNzLKVwIcR7u_sRrkfaSk&fields=review&key=AIzaSyC8wZuFRk7ump0oBvWfCOBpC7qnBqVTGE8`, {
        method: 'GET',
    });
    return response.json()
}

module.exports = {getGoogleReviews}
