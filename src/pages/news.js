import React, {useState, useEffect} from "react";
import axios from "axios";
import moment from "moment";

import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReadMoreIcon from '@mui/icons-material/ReadMore';

import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import Header from '../components/header';

// const Item = styled(Paper)(({ theme }) => ({
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const News =()=>{
    const [expanded, setExpanded] = useState(false);
    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const [loader, setLoader] = useState(true);
    const [cardData, setCardData] = useState([]);

    useEffect(()=>{
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
                                    <Card  sx={{ maxWidth: "100%", minHeight: 400 }}>
                                        <CardHeader
                                            avatar={
                                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                                R
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
                                            <Typography variant="body2" color="text.secondary">
                                            {item.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions disableSpacing>
                                            {/* <IconButton aria-label="add to favorites">
                                                <FavoriteIcon />
                                            </IconButton> */}
                                            <IconButton aria-label="share">
                                                <a href={item.url} rel="noreferrer" target="_blank">
                                                    <ReadMoreIcon />
                                                </a>
                                            </IconButton>
                                            <ExpandMore
                                            expand={expanded}
                                            onClick={handleExpandClick}
                                            aria-expanded={expanded}
                                            aria-label="show more"
                                            >
                                                <ExpandMoreIcon />
                                            </ExpandMore>
                                        </CardActions>
                                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                                            <CardContent>
                                                <Typography paragraph>Content:</Typography>
                                                <Typography paragraph>
                                                    {item.content}
                                                </Typography>
                                            </CardContent>
                                        </Collapse>
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