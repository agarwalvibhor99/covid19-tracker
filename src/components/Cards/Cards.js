import React from 'react'
import cx from 'classnames'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './Cards.module.css'
const Cards = ({data}) =>{
    console.log(data)
    if(!data.confirmed?.value){
        return 'Loading.....'
    }

    return(
        <div className = {styles.container}> 
            <Grid container spacing = {3} justify = "center">
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{data.confirmed?.value}
                                        {/* <CountUp 
                            start={0} 
                            end={data.confirmed?.value} 
                            duration = {1.5} 
                            separator="," /> */}
        
                        </Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{data.recovered?.value}</Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of recoveries cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3}  className={cx(styles.cards, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5" >{data.deaths?.value}</Typography>
                        <Typography color="textSecondary" gutterBottom>{new Date(data.lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards