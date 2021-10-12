import React, {useState} from "react";
import {Bar, Pie, Line} from "react-chartjs-2";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';


const Dashboard =()=>{
    const chartData={
            labels:['one','two','three'],
            datasets:[{
                label: 'News',
                data:[
                    10,
                    20,
                    55,
                ],
                backgroundColor: [
                    'green',
                    'blue',
                    'red',
                ]
            }]
    }
    return(
        <div>
            {/* <Header/> */}
            <div className="dashboardContainer">
                <Grid container>
                    <Grid item xs={12} md={6}>
                    <Typography variant="h1" component="div" gutterBottom>
                        Welcome Bolarinwa
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Bar
                            data={chartData}
                            options={{
                                maintainAspectRatio: true
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Dashboard;