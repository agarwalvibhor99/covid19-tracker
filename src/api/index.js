import axios from 'axios'

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async () =>{
   try{
        const { data } = await axios.get(url) 

        const partialData = {
           confirmed: data.confirmed,
           recovered: data.recovered,
           deaths: data.deaths, 
           lastUpdate: data.lastUpdate,
        }
        return partialData
   } catch(error){
    console.log(error.message)
   }
}


export const fetchDailyData = async () =>{
   try{
        const { data } = await axios.get(`${url}/daily`) 
        console.log(data)


      //   const partialData = {
      //      confirmed: data.confirmed,
      //      recovered: data.recovered,
      //      deaths: data.deaths, 
      //      lastUpdate: data.lastUpdate,
      //   }
      const partialData = data.map((dailyData) => ({
         confirmed: dailyData.totalConfirmed,
         deaths: dailyData.deaths.total,
         date: dailyData.reportDate,
      }))
      console.log(partialData)
        return partialData
   } catch(error){
    console.log(error.message)
   }
}
