import React from "react";
import {Bar} from "react-chartjs-2";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Header from '../components/header';
import Footer from '../components/footer';


const Dashboard =()=>{
    const getAuth = JSON.parse(localStorage.getItem("authUser"));
    const chartData={
            labels:['Total News'],
            datasets:[{
                label: 'News',
                data:[
                    100,
                    
                ],
                backgroundColor: [
                    'green',
                ]
            }]
    }
    return(
        <div>
            <Header/>
            <div className="dashboardContainer">
                <Grid container>
                    <Grid item xs={12} md={6}>
                    <Typography variant="h1" component="div" gutterBottom>
                        Welcome, {getAuth.firstName}.
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
                    <Grid xs={12} style={{textAlign: "center", marginTop: "40px"}}>
                        <Button variant="text">
                            <Link to="/news" className="formFieldLink">
                                Check Live News
                            </Link> 
                        </Button> 
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard;