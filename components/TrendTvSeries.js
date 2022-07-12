import React,{useEffect,useState,Suspense} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from "./Skeleton"
import { Typography } from '@mui/material';

const Card = React.lazy(() => import('./TvSeriesCard'))
export default function TrendTvSeries() {
    const [trendMovies,setTrendMovies] = useState([])
    const fetchData = async () =>{
        try{
          const res = await fetch('https://api.themoviedb.org/3/tv/popular?api_key=29dd2016aad2fc31cccad2e917428cd4')
          const result = await res.json()
          setTrendMovies(result.results);
          console.log(result);
        }
        catch{
            console.log("error");
        }
    }
      useEffect(()=>{
      fetchData()
      },[])
  return (
    <Box sx={{ flexGrow: 1,padding:2}}>
    <Typography sx={{my:2}} variant="h6">
     Trend Tv Series
    </Typography>
       <Grid container spacing={2} align = "center" justify = "center" alignItems = "center">
         {
             trendMovies.map(item=>(
                     <Grid item md={3} sm={4} xs={12}>
                          <Suspense fallback={ <Skeleton/>}>
                          <Card trends={item}/>
         </Suspense>
                     
         </Grid>
                 ))
             } 
       </Grid>
     </Box>
  )
}
