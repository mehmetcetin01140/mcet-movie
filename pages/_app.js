import "../styles/globals.scss";
import Layout from "../layout/layout";
import { useEffect, useState } from "react";
import Router from "next/router";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

function MyApp({ Component, pageProps }) {
  const [loader, setLoader] = useState(false);
  const loading = () => {
    if (loader) {
      return (
        <Box sx={{ width: "100%", position: "absolute" }}>
          <LinearProgress color="inherit" />
        </Box>
      );
    }
  };
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoader(true));
    Router.events.on("routeChangeComplete", () =>
      setTimeout(() => {
        setLoader(false);
      }, 500)
    );
  }, []);

  return (
    <Layout>
        {loading()}
        <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
