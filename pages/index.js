
import styles from '../styles/Home.module.scss'
import Navbar from "../components/Navbar"

import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { useEffect,useState } from 'react';
import TrendMovies from '../components/TrendMovies';
import Search from "../components/Search"
import TrendTvSeries from '../components/TrendTvSeries';
export default function Home() {


  return (
  <div className="home-page-container">
    <Search/>
    <TrendMovies/>
    <TrendTvSeries/>
    
  </div>
 
  )
}
