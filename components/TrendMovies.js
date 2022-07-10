import React,{useEffect,useState,Suspense} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Skeleton from "./Skeleton"
import { Typography } from '@mui/material';
const Card = React.lazy(() => import('./Card'))
// const sampleListData = useSelector((state) => state.sampleData);
// const {userLoggedIn,btcData} = sampleListData
// const [data,setData] = useState([])
// const fetchData = async () =>{

//   const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=29dd2016aad2fc31cccad2e917428cd4')
//   const users = await res.json()
//   console.log(users);
// }
//   useEffect(()=>{
//   fetchData()
//   },[])
const TrendMovies = () => {
    const [trendMovies,setTrendMovies] = useState([])
    const fetchData = async () =>{
        try{
          const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=29dd2016aad2fc31cccad2e917428cd4')
          const result = await res.json()
          setTrendMovies(result.results);
        }
        catch{
            console.log("error");
        }
    }
      useEffect(()=>{
      fetchData()
      },[])
    return (
      
         <Box sx={{ flexGrow: 1}}>
   
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
    
    
    );
}

export default TrendMovies;
