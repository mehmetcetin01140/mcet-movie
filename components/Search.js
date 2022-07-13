import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import SearchInput from "./SearchInput";
import { useState, useEffect } from "react";
import Link from "next/link";
export default function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const getData = async () => {
    const res = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=29dd2016aad2fc31cccad2e917428cd4&query=${searchValue}`
    );
    const searchResult = await res.json();
    setSearchResults(searchResult);
  };
 
    
   
  
  useEffect(() => {
    if (!searchValue) {
      document.querySelector(".dropdown").style.display = "none";
    }
    if (searchValue) {
      document.querySelector(".dropdown").style.display = "block";
      getData();
    }
  }, [searchValue]);
  return (
    <Container className="Search" sx={{ mt: 3 }}>
      <Box className="search-inside">
        <Box className="search-text-area">
          <Typography
            sx={{ color: "white", fontWeight: "medium" }}
            variant="h6"
          >
            More than one million movie content
          </Typography>
        </Box>

        <SearchInput
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />

        <Box className="dropdown">
          <Box sx={{ position: "relative" }}>
            {searchResults?.results?.map((result,index) => (
              <Link href={`/content/${result.id}`} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    padding: 1,
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                  className="dropdown-item"
                >
                  {result.poster_path && (
                    <img
                      src={`https://image.tmdb.org/t/p/w92/${result.poster_path}`}
                    />
                  )}
                  <Box>
                    <Typography
                      sx={{ px: "10px", fontWeight: "bold", fontSize: "1em" }}
                      variant="h6"
                    >
                      {result.original_title}
                    </Typography>
                    <Typography
                      sx={{ px: "10px", fontWeight: "bold", fontSize: ".7em" }}
                    >
                      {result.overview.slice(0, 60)}...
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
