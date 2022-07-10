
import styles from '../styles/Home.module.scss'
import Navbar from "../components/Navbar"

import { useDispatch, useSelector } from "react-redux";
import Link from 'next/link';
import { useEffect,useState } from 'react';
import TrendMovies from '../components/TrendMovies';
export default function Home() {


  return (
  <div className="home-page-container">
    <TrendMovies/>
    
  </div>
 
  )
}
