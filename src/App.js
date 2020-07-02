import React, {useState, useEffect} from 'react'

// import Cards from './components/Cards/Cards'
// import Chart from './components/Chart/Chart'
// import CountryPicker from './components/CountryPicker/CountryPicker'

import {Cards, Chart, CountryPicker} from './components'
import styles from './App.module.css'
import {fetchData} from './api'     // /index.js not required: when file name index it is directly looked for


const App = () =>{

    const [data, setData] = useState({})

    useEffect(()=>{
        getData()
      },[])
    
    
    const getData = async () =>{
        const fetchedData = await fetchData();
        setData(fetchedData)
        console.log(fetchedData);
    }

   

    return(
        <div className={styles.container}>
            <h1> App </h1>
            <Cards data = { data }/>
            <Chart /> 
            <CountryPicker />
        </div>
    )
}

export default App