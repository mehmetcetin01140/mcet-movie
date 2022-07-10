import React,{useEffect} from 'react';
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Container from '@mui/material/Container';

const Content = ({currentMovie}) => {
        useEffect(() => {
           console.log(currentMovie);
        }, []);
    const router = useRouter()
    return(
        <Container>

        <Box sx={{ flexGrow: 1,display:"flex",flexDirection:"column",alignItems:"center"}} className="content-container">
     
            <Typography variant="h5" sx={{my:2}}>
                {currentMovie.original_title}
            </Typography>
           <img src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}/>
            <StarIcon sx={{color:"gold",mt:1}}/>
            <Typography variant="h6">
                {currentMovie.vote_average}
            </Typography>
            <Box className="content-production">
          <Typography variant="h6">
          {currentMovie.production_companies[0]?.name}
          </Typography>
            <img src={`https://image.tmdb.org/t/p/original/${currentMovie.production_companies[0]?.logo_path}`}/>
            </Box>
      </Box>
  
         <Grid container sx={{marginY:3,textAlign:"center"}}>
         
            <Grid lg={4} xs={12} item sx={{marginTop:2}}>
            <Typography variant="h7">
        Release Date :  {currentMovie.release_date}
          </Typography>
            </Grid>
            <Grid lg={4} xs={12} item sx={{marginTop:2}}>
            <Typography variant="h7">
        Budget :  {currentMovie.budget} $
          </Typography>
     
            </Grid>
            <Grid lg={4} xs={12} item sx={{marginTop:2}}>
            <Typography variant="h7">
        Revenue :  {currentMovie.revenue} $
          </Typography>
     
            </Grid>
            {currentMovie.genres.map((genre,index)=>(
         <Grid lg={1} xs={12} item sx={{marginTop:4,marginX:"auto"}}>
                    
                    <Typography variant="h5" key={index} >
                     {genre.name}
                      </Typography>
                   
            </Grid>
            ))}
         </Grid>
            <Typography variant="h5" sx={{mt:2}}>
                Overview
            </Typography>
            <Typography variant="h6" sx={{mt:2}}>
                {currentMovie.overview}
            </Typography>
        
        </Container>
      
      
    )
}

export default Content;
export async function getStaticPaths() {
  const res = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=29dd2016aad2fc31cccad2e917428cd4')
          const result = await res.json()
  
    const paths = result.results.map((result) => ({
      params: { id: result.id.toString() },
    }))
  
    return { paths, fallback: false }
  }
  export async function getStaticProps({ params }) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=29dd2016aad2fc31cccad2e917428cd4`)
    const currentMovie = await res.json()
  
    return { props: {currentMovie} }
  }