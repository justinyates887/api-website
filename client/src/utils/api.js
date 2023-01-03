const axios = require('axios')
const backendUrl = 'localhost:8081'

export function sendMail(values) {
    return axios.post(`http://${backendUrl}/api/access`, {
        values
    }, {
        withCredentials: true
    }).catch((err) => {
        console.log(err)
    })
}

export function getUserData() {
    return axios.get(`http://${backendUrl}/api/userdata` , {
        withCredentials: true
    }).catch((err) => {
        console.log('Error at client axios getUserdata' + err)
    })
}