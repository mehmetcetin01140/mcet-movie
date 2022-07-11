import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Link from 'next/link';
export default function ActionAreaCard({trends}) {
  return (
    <>
    <Link href={`/content/${trends.id}`}>
 
    <Card sx={{ maxWidth: "100%", height:"750px" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image={`https://image.tmdb.org/t/p/original/${trends.poster_path}`}
          alt="green iguana"
          sx={{objectFit:"fill"}}
        />
        <CardContent sx={{height:200,display:"flex",flexDirection:"column",justifyContent:"center"}}>
          <Typography gutterBottom variant="h5" component="div">
           {trends.original_title}
          </Typography>
      
        </CardContent>
          <Typography variant="body2" color="text.secondary">
       {trends.vote_average}
          </Typography>
          <StarIcon sx={{color:"gold"}}/>
      </CardActionArea>
    </Card>
    </Link>
    </>
  );
}