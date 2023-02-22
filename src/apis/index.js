export const BASE_URL = "http://13.234.112.125:5005/api/v1"


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