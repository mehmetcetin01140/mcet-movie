import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
import Box from '@mui/material/Box';
export default function TvSeriesCard({trends}) {
  return (
    <>
    <Link href={`/tvseries/${trends.id}`}>
 
    <Card sx={{ maxWidth: "100%"}}>
      <CardActionArea>
    <Box sx={{position:"absolute",right:"0px",display:"flex",flexDirection:"column",backgroundColor:"rgb(15, 14, 14)",borderRadius:10,padding:1}}>
          <StarIcon sx={{color:"gold"}}/>
     <Typography variant="body2" color="white" >
       {trends.vote_average}
          </Typography>
     </Box>
        <CardMedia
          component="img"
          height="500"
          image={`https://image.tmdb.org/t/p/original/${trends.poster_path}`}
          alt="green iguana"
          sx={{objectFit:"fill"}}
          className="card-image"
        />
      
      </CardActionArea>
    </Card>
    </Link>
    </>
  );
}