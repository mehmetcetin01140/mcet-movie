import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Container from "@mui/material/Container";
import RecommendationSlider from "../../components/RecommendationSlider";
const TvSeries = ({ currentMovie, recommendationResult }) => {
  console.log(currentMovie);
  return (
    <Container>
      <Typography variant="h5" sx={{ my: 2 }}>
        {currentMovie.original_name}
      </Typography>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
        className="content-container"
      >
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item lg={8}>
            <Box className="content-image-container">
              {currentMovie.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
                />
              ) : (
                <img src={"/noimage.jpg"} />
              )}
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: 1,
              }}
            >
             
              <StarIcon sx={{ color: "gold" }} />
              <Typography variant="h6">{currentMovie.vote_average}</Typography>
            </Box>
          </Grid>
          <Grid item lg={4}>
            <Box className="content-production">
              <Typography variant="h6">
                {currentMovie.production_companies[0]?.name}
              </Typography>
              {currentMovie.production_companies[0]?.logo_path && (
                <img
                  src={`https://image.tmdb.org/t/p/original/${currentMovie.production_companies[0]?.logo_path}`}
                />
              )}
              <Box sx={{ my: 3 }}>
                {currentMovie.genres.map((genre, index) => (
                  <Typography
                    variant="h6"
                    key={index}
                    sx={{ display: "flex", justifyContent: "center" }}
                  >
                    {genre.name}
                  </Typography>
                ))}
              </Box>
              Original Language : {currentMovie.original_language?.toUpperCase()}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={{ textAlign: "center" }}>
     
          <Typography variant="h7">
            First Air Date : {currentMovie.first_air_date}
          </Typography>
      
      
      </Grid>

      <Typography variant="h5" sx={{ mt: 5 }}>
        Overview
      </Typography>
      <Typography variant="h7" sx={{ mt: 2 }}>
        {currentMovie.overview}
      </Typography>

      {recommendationResult.results.length && (
        <Box sx={{ marginY: 10 }}>
          <Typography variant="h5" sx={{ marginBottom: 3 }}>
            Recommendations
          </Typography>

          <RecommendationSlider recommendation={recommendationResult} path="/tvseries/" />
        </Box>
      )}
    </Container>
  );
};

export default TvSeries;


export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?api_key=29dd2016aad2fc31cccad2e917428cd4`
  );
  const currentMovie = await res.json();
  const recommendation = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/recommendations?api_key=29dd2016aad2fc31cccad2e917428cd4`
  );
  const recommendationResult = await recommendation.json();
  return { props: { currentMovie, recommendationResult } };
};
