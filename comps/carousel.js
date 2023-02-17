import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import HeaderBar from '@/comps/header'

const apiKey = "qO706hvtrjKPLwTwuCZ9XYxHnUPvhtQHSM6Ncmu8";
const url = `https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=${apiKey}`;

export default function Carousel() {
    const [data, setData] = useState([]);
    const [index, setIndex] = useState(0);
    const [active, setActive] = useState(false);
  
    const getTechTransferData = async () => {
      try {
        const res = await axios.get(url);
        const info = res.data.results;
        setData(info)
      } catch (error) {
        console.log(error);
      }
    }
  
    useEffect(() => {
      getTechTransferData();
    }, [])
  
    const handlePrev = () => {
      setIndex(index === 0 ? data.length - 1 : index - 1);
      setActive(false);
    }
  
    const handleNext = () => {
      setIndex(index === data.length - 1 ? 0 : index + 1);
      setActive(false);
    }
  
    const handleImageLoad = () => {
      setActive(true);
    }
  
    return (
      <div className={styles.carousel}>
        <div className={styles.carouselArrow} onClick={handlePrev}>
          &lt;
        </div>
        <div className={styles.carouselImageContainer}>
          {data.length > 0 && data[index].map((t, ind) => {
            if (ind === 10) {
              return (
                <div className={`${styles.imageCont} ${active ? styles.active : ''}`} key={t}>
                  <img
                    src={t}
                    alt={t}
                    width={200}
                    height={200}
                    onLoad={handleImageLoad}
                  />
                </div>
              )
            }
          })}
        </div>
        <div className={styles.carouselArrow} onClick={handleNext}>
          &gt;
        </div>
      </div>
    );
  }
  