export const BASE_URL = "http://43.205.114.135:5005/api/v1"


export default {
    auth : {
        login: `${BASE_URL}/auth/login`
    },

    airport : {
        airportdata : `${BASE_URL}/airport/airportdata`
    },
    queue: {
        queuedata : `${BASE_URL}/queue/queue-data`
    },

}