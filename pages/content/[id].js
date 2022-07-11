import React,{useEffect,useState} from 'react';
import { useRouter } from 'next/router'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Container from '@mui/material/Container';
import RecommendationSlider from '../../components/RecommendationSlider';
const Content = ({currentMovie}) => {
    const [recommendation,setRecommendation] = useState([])
      const getRecommendation = async () => {
        const res = await fetch(`https://api.themoviedb.org/3/movie/${currentMovie.id}/recommendations?api_key=29dd2016aad2fc31cccad2e917428cd4`)
        const result = await res.json() 
        setRecommendation(result)
      }
        useEffect(() => {
         getRecommendation()
        }, []);
    const router = useRouter()
    return(
      
      
      
          <Container>
     
            <Typography variant="h5" sx={{my:2}}>
                {currentMovie.original_title}
            </Typography>
      <Box sx={{ flexGrow: 1,display:"flex",flexDirection:"row",alignItems:"center"}} className="content-container">
            <Grid container sx={{display:"flex",justifyContent:"center"}}>
              <Grid item lg={8}>
              <Box className="content-image-container">
       <img src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}/>
       
</Box>
        <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",mt:1}}>  <StarIcon sx={{color:"gold"}}/>
            <Typography variant="h6">
            {currentMovie.vote_average}
            </Typography>
       </Box>
              </Grid>
              <Grid item lg={4} >
              <Box className="content-production">
       
          <Typography variant="h6">
          {currentMovie.production_companies[0]?.name}
          </Typography>
            <img src={`https://image.tmdb.org/t/p/original/${currentMovie.production_companies[0]?.logo_path}`} />
          <Box>
        
            <Box sx={{my:3}}>
                     {currentMovie.genres.slice(0,3)?.map((genre,index)=>(
                   

                   <Typography variant="h6" key={index} sx={{display:"flex",justifyContent:"center"}}>
                    {genre.name}
                     </Typography>
                  
                  
                  ))}
                  </Box>
             </Box>
                          </Box>
                  
              </Grid>
            </Grid>
      
  
      
      </Box>
      <Grid container sx={{textAlign:"center"}}>
         
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
      
      </Grid>
   
   
            <Typography variant="h5" sx={{mt:5}}>
                Overview
            </Typography>
            <Typography variant="h7" sx={{mt:2}}>
                {currentMovie.overview}
            </Typography>
            
  <Box sx={{marginY:10}}>
    <Typography variant="h5" sx={{marginBottom:3}}>
      Recommendations
    </Typography>
  <RecommendationSlider recommendation={recommendation}/>
  
          </Box>
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