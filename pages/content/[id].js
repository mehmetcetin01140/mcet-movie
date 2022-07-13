import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Container from "@mui/material/Container";
import RecommendationSlider from "../../components/RecommendationSlider";
import Head from 'next/head'
import Image from "next/image"
const Content = ({ currentMovie, recommendationResult }) => {
  return (
    
    <Container>
       <Head>
        <title>{currentMovie.original_title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Typography variant="h5" sx={{ my: 2 }}>
        {currentMovie.original_title}
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
            <Box
              className="content-image-container"
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {currentMovie.backdrop_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
                  alt={currentMovie.original_name}
                />
                
              ) : (
                <img src={"/noimage.jpg"} width="50%" alt="null"/>
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
                  alt={currentMovie.original_name}
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
              Original Language :{" "}
              {currentMovie.original_language?.toUpperCase()}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={{ textAlign: "center" }}>
        <Grid lg={4} xs={12} item sx={{ marginTop: 2 }}>
          <Typography variant="h7">
            Release Date : {currentMovie.release_date}
          </Typography>
        </Grid>
        <Grid lg={4} xs={12} item sx={{ marginTop: 2 }}>
          <Typography variant="h7">Budget : {currentMovie.budget} $</Typography>
        </Grid>
        <Grid lg={4} xs={12} item sx={{ marginTop: 2 }}>
          <Typography variant="h7">
            Revenue : {currentMovie.revenue} $
          </Typography>
        </Grid>
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

          <RecommendationSlider
            recommendation={recommendationResult}
            path={"/content/"}
          />
        </Box>
      )}
    </Container>
  );
};

export default Content;

export const getServerSideProps = async (context) => {
  const id = context.query.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=29dd2016aad2fc31cccad2e917428cd4`
  );
  const currentMovie = await res.json();
  const recommendation = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=29dd2016aad2fc31cccad2e917428cd4`
  );
  const recommendationResult = await recommendation.json();
  return { props: { currentMovie, recommendationResult } };
};
