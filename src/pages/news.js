import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReadMoreIcon from '@mui/icons-material/ReadMore';
import Tooltip from '@mui/material/Tooltip';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import Header from '../components/header';


const News =()=>{
    const [loader, setLoader] = useState(true);
    const [cardData, setCardData] = useState([]);

    //This is an effect to fetch the news api on page load
    useEffect(()=>{
        // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        // axios.get(`${proxyUrl}https://newsapi.org/v2/everything?q=keyword&apiKey=eb27ad15bfda4460bb83113c1df0c449`)
        axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=eb27ad15bfda4460bb83113c1df0c449')
            .then(function (response) {
                // handle success
                console.log(response);
                setCardData(response.data.articles);
                setLoader(false);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
                setLoader(false);
            })
            .then(function () {
                setLoader(false);
                // always executed
            });
    },[])

    function formatDate (date){
        return moment(date).format("MMM DD YYYY");
    }
    return(
        <Box sx={{ flexGrow: 2 }}>
            <Header/>
            <Grid container spacing={2}>
                {
                    loader ?
                    <div className="pageLoader">
                         <CircularProgress/>
                    </div>
                        :
                    <>
                        {
                            cardData.map((item,index) => {
                            return(
                                <Grid key={index} item xs={12} md={6}>
                                    <Card  sx={{ maxWidth: "100%", height: "100%" }}>
                                        <CardHeader
                                            avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                {item.author.charAt(0)}
                                            </Avatar>
                                            }
                                            action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                            }
                                            title={item.author}
                                            subheader={formatDate(item.publishedAt)}
                                        />
                                        <CardMedia
                                            component="img"
                                            height="194"
                                            image={item.urlToImage}
                                            alt="Article Image"
                                        />
                                        <CardContent>
                                            <Typography variant="body1" color="text.secondary">
                                            {item.description}
                                            </Typography>
                                            <br/>
                                            <Typography variant="body2" paragraph>
                                                {item.content}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            <Tooltip title="Read More">
                                                <IconButton aria-label="share">
                                                    <a href={item.url} rel="noreferrer" target="_blank">
                                                        <ReadMoreIcon />
                                                    </a>
                                                </IconButton>
                                            </Tooltip>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })
                        }   
                    </>
                }
            </Grid>
        </Box>
    )
}

export default News;