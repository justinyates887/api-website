const axios = require('axios')
const backendUrl = 'localhost:8081'

export function getGoogleReviews() {
    return axios.get(`http://${backendUrl}/api/reviews`, {
        withCredentials: true
    }).catch((err) => {
        console.log('Error at client axios getGoogleReviews' + err)
    })
}