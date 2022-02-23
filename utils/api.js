const fetch = require('node-fetch-commonjs');
const path = require('path')
const fs = require('fs')
require ('dotenv');

const meta = require('../meta.json')

propertyId = '304634158';

const {BetaAnalyticsDataClient} = require('@google-analytics/data');

const analyticsDataClient = new BetaAnalyticsDataClient();

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

//Runs data report for past 30 days users by date
async function getUsersByDateThirty() {
    var today = new Date();
    var priordate = new Date(new Date().setDate(today.getDate()-30)).toISOString().split('T')[0]

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
        {
            startDate: `${priordate}`,
            endDate: 'today',
        },
        ],
        dimensions: [
        {
            name: 'date'
        },
        ],
        metrics: [
            {name: 'activeUsers'},
            {name: 'engagedSessions'},
            {name: 'engagementRate'},
            {name: 'newUsers'},
        ],
    });

    for(i = 0; i < response.rows[0].metricValues.length; i++) {
        console.log(response.rows[0].dimensionValues[0], response.rows[0].metricValues[i]);
    };

    return response.rows[0]
}

//Runs data report past year users by date
async function getUsersByDateYear() {
    var today = new Date();
    var priordate = new Date(new Date().setDate(today.getDate()-365)).toISOString().split('T')[0]

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
        {
            startDate: `${priordate}`,
            endDate: 'today',
        },
        ],
        dimensions: [
        {
            name: 'date'
        },
        ],
        metrics: [
            {name: 'activeUsers'},
            {name: 'engagedSessions'},
            {name: 'engagementRate'},
            {name: 'newUsers'},
        ],
    });
    return response.rows[0]
}

//Runs data report past year users by city
async function getUsersByCity() {
    var today = new Date();
    var priordate = new Date(new Date().setDate(today.getDate()-365)).toISOString().split('T')[0]

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
        {
            startDate: `${priordate}`,
            endDate: 'today',
        },
        ],
        dimensions: [
        {
            name: 'city'
        },
        ],
        metrics: [
            {name: 'activeUsers'},
            {name: 'engagedSessions'},
            {name: 'engagementRate'},
            {name: 'newUsers'},
        ],
    });
    return response.rows[0]
}

//Runs data report past year users by country
async function getUsersByCountry() {
    var today = new Date();
    var priordate = new Date(new Date().setDate(today.getDate()-365)).toISOString().split('T')[0]

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
        {
            startDate: `${priordate}`,
            endDate: 'today',
        },
        ],
        dimensions: [
        {
            name: 'country'
        },
        ],
        metrics: [
            {name: 'activeUsers'},
            {name: 'engagedSessions'},
            {name: 'engagementRate'},
            {name: 'newUsers'},
        ],
    });
    return response.rows[0]
}

async function getUsersByAge() {
    var today = new Date();
    var priordate = new Date(new Date().setDate(today.getDate()-365)).toISOString().split('T')[0]

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
        {
            startDate: `${priordate}`,
            endDate: 'today',
        },
        ],
        dimensions: [
        {
            name: 'userAgeBracket'
        },
        ],
        metrics: [
            {name: 'activeUsers'},
            {name: 'engagedSessions'},
            {name: 'engagementRate'},
            {name: 'newUsers'},
        ],
    });
    return response.rows[0]
}

async function getUsersByGender() {
    var today = new Date();
    var priordate = new Date(new Date().setDate(today.getDate()-365)).toISOString().split('T')[0]

    const [response] = await analyticsDataClient.runReport({
        property: `properties/${propertyId}`,
        dateRanges: [
        {
            startDate: `${priordate}`,
            endDate: 'today',
        },
        ],
        dimensions: [
        {
            name: 'userGender'
        },
        ],
        metrics: [
            {name: 'activeUsers'},
            {name: 'engagedSessions'},
            {name: 'engagementRate'},
            {name: 'newUsers'},
        ],
    });
    return response.rows[0]
}

module.exports = { getGoogleReviews, handleMeta, getUsersByDateThirty, getUsersByDateYear, getUsersByCity, getUsersByCountry, getUsersByAge, getUsersByGender }
