import React, {useState, useEffect} from 'react'
import {fetchDailyData} from '../../api'
import {Line, Bar} from 'react-chartjs-2'
import Styles from './Chart.module.css' 


const Charts = () =>{
    const [dailyData, setDailyData] = useState([])

    useEffect(()=>{ 
        getDailyData()
      },[])
    
    
    const getDailyData = async () =>{
        const fetchedDailyData = await fetchDailyData();
        setDailyData(fetchedDailyData)
        console.log(fetchedDailyData);
    }

    const lineChart = (
        dailyData.length
        ?(
            <Line
            data = {{
                labels: dailyData.map(({date})=> date),
                datasets:[{
                    data: dailyData.map(({confirmed})=>confirmed),
                    label: 'Infected',    
                    borderColor: '#3333ff',
                    fill: true,
                },{
                    data: dailyData.map(({deaths})=>deaths),
                    label: 'Deaths',
                    borderColor: 'red',
                    backgroundColor: 'rgba(255, 0, 0, 0.5)',
                    fill: true,
                }],
            }}
            />) : null
    )


    return(
       <div className={Styles.container}>
           {lineChart}

       </div>
    )
}

export default Charts