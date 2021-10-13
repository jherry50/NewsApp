import React from "react";
import { PolarArea} from "react-chartjs-2";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Header from '../components/header';
import Footer from '../components/footer';


const Dashboard =()=>{
    const getAuth = JSON.parse(localStorage.getItem("authUser"));

    const polarData = {
        labels: ['Politics', 'Education', 'Government', 'Finance'],
        datasets: [
          {
            label: 'Authors in Categorry',
            data: [22, 29, 12, 17],
            backgroundColor: [
              'rgba(1,44,116, 0.5)',
              'rgba(54, 162, 235, 0.5)',
              'rgba(207,21,45, 0.5)',
              'rgba(99,101,105, 0.5)',
            ],
            borderWidth: 1,
          },
        ],
      };
      
    return(
        <div>
            <Header/>
            <div className="dashboardContainer">
                <Grid container>
                    <Grid item xs={12} md={7}>
                    <Typography variant="h1" component="div" gutterBottom>
                        Welcome, {getAuth.firstName}.
                    </Typography>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <Typography variant="h5" component="div" gutterBottom>
                            News Category
                        </Typography>
                        <PolarArea
                         data={polarData}
                         options={{
                            maintainAspectRatio: true
                            }}
                        />
                    </Grid>
                </Grid>
            </div>
            <Footer/>
        </div>
    )
}

export default Dashboard;