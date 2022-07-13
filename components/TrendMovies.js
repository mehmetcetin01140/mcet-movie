import React, { useEffect, useState, Suspense } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "./Skeleton";
import { Typography } from "@mui/material";
const Card = React.lazy(() => import("./Card"));

const TrendMovies = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const fetchData = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=29dd2016aad2fc31cccad2e917428cd4"
      );
      const result = await res.json();
      setTrendMovies(result.results);
    } catch {
      console.log("error");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Typography sx={{ my: 2 }} variant="h6">
        Trend Movies
      </Typography>
      <Grid
        container
        spacing={2}
        align="center"
        justify="center"
        alignItems="center"
      >
        {trendMovies.map((item,index) => (
          <Grid item md={3} sm={4} xs={12} key={index}>
            <Suspense fallback={<Skeleton />}>
              <Card trends={item} path={"/content/"} />
            </Suspense>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TrendMovies;
