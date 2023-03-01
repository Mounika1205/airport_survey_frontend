import axios from 'axios';
import endPoints from './index';



// export const login = async user => {
//   let config = {
//     method: 'post',
//     url: endPoints.auth.login,
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     data: user,
//   };
//   console.log("Config", config);

//   try {
//     const response = await axios(config);
//     console.log("Response-----------__>", response);
//     return response;

//   } catch (e) {
//     throw e;
//   }
// };
export const storeAirportDemograph = async (token, data) => {
  let config = {
    method: 'post',
    url: endPoints.airport.airportdata,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    data,
  };
  console.log("Config", config);

  try {
    const response = await axios(config);
    console.log("Response++++++__>", response);
    return response.data;
  } catch (e) {
    throw e;
  }
};
export const postQueueData = async (token,data) => {

  console.log(token, data, "iam token and data from api call")

  let config = {
    method: 'post',
    // url:'http://10.0.2.2:5005/api/v1/queue/queue-data',
    url: endPoints.queue.queuedata,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': token
    },
    data,
  };
  console.log("Config", config);


  try {

    console.log("before api==============")
    const response = await axios(config);
    return response;
    console.log("Response++++++__>", response);


  } catch (e) {
    // console.log(e, "iam error")
    // throw e;
    const error = e;
    console.log(error, "iam e")
    return error;

  }
  

};


