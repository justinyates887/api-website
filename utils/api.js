const fs = require('fs')
const path = require('path')
require ('dotenv');

propertyId = '304634158';

const {BetaAnalyticsDataClient} = require('@google-analytics/data');

const analyticsDataClient = new BetaAnalyticsDataClient();

const indexPath  = path.resolve(__dirname, '..', 'build', 'index.html');

function handleMeta(app){

    app.get('/', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Home</title>`
            )
            .replace('__META_DESCRIPTION__', 'Welcome to the backyard of your dreams.')

            return res.send(htmlData);
        });
    })

    app.get('/about/company', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>About Us</title>`
            )
            .replace('__META_DESCRIPTION__', 'Come learn more about Associated Pools, who we are, and what we do.')

            return res.send(htmlData);
        });
    })

    app.get('/about/people', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Our Team</title>`
            )
            .replace('__META_DESCRIPTION__', 'Meet the people who make your idea into reality')

            return res.send(htmlData);
        });
    })
    app.get('/services/residential', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Residential</title>`
            )
            .replace('__META_DESCRIPTION__', 'We can tackle any residential backyard project you may have')

            return res.send(htmlData);
        });
    })
    app.get('/services/commercial', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Commercial</title>`
            )
            .replace('__META_DESCRIPTION__', 'See why Kansas City contractors choose us again and again')

            return res.send(htmlData);
        });
    })
    app.get('/services/service', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Service</title>`
            )
            .replace('__META_DESCRIPTION__', 'We offer a wide variety of swimming pool maintenence services')

            return res.send(htmlData);
        });
    })
    app.get('/about/starting', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Starting Equipment</title>`
            )
            .replace('__META_DESCRIPTION__', 'See what your pool will come equipped with from the start')

            return res.send(htmlData);
        });
    })
    app.get('/about/chemicals', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Chemicals</title>`
            )
            .replace('__META_DESCRIPTION__', 'Know the chemicals used to treat and maintain your pool')

            return res.send(htmlData);
        });
    })
    app.get('/resources/equipment', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Equipment Brochures</title>`
            )
            .replace('__META_DESCRIPTION__', 'Brouchures for every piece of equipment we install')

            return res.send(htmlData);
        });
    })
    app.get('/resources/stoneandtile', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Stone & Tile</title>`
            )
            .replace('__META_DESCRIPTION__', 'Take a look at some of the many options for stone and tile we can install')

            return res.send(htmlData);
        });
    })
    app.get('/resources/chemicals', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Chemical MSDS</title>`
            )
            .replace('__META_DESCRIPTION__', 'Chemical Saftey Data sheets available for download')

            return res.send(htmlData);
        });
    })
    app.get('/contact', (req, res) => {
        fs.readFile(indexPath, 'utf8', (err, htmlData) => {
            if (err) {
                console.error('Error during file reading', err);
                return res.status(404).end()
            }

            htmlData = htmlData.replace(
                "<title>Associated Pools Inc</title>",
                `<title>Contact Us!</title>`
            )
            .replace('__META_DESCRIPTION__', 'Give us a shout to talk to someone about how to make your outdoor dreams a reality!')

            return res.send(htmlData);
        });
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

module.exports = { handleMeta, getUsersByDateThirty, getUsersByDateYear, getUsersByCity, getUsersByCountry, getUsersByAge, getUsersByGender }
