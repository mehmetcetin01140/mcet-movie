import TrendMovies from "../components/TrendMovies";
import Search from "../components/Search";
import TrendTvSeries from "../components/TrendTvSeries";
import Head from 'next/head'
export default function Home() {
  return (
    <>
     <Head>
        <title>mCET Movie</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    <div className="home-page-container">
      <Search />
      <TrendMovies />
      <TrendTvSeries />
    </div>
    </>
  );
}
