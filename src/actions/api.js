import axios from 'axios'

const baseUrl = 'localhost:3873/api'

export default {
    customer(url = baseUrl + 'customer/'){
        return {
            fetchAll : () => axios.get(url),
            fetchById : id => axios.get(url+id),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updateRecord) => axios.put(url+id, updateRecord),
            delete: id => axios.delete(url+id)
        }
    }
}