import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Link from 'next/link'
import HeaderBar from '@/comps/header'
import Carousel from '@/comps/carousel'
import Galaxy from '@/comps/galaxy'

export default function Home() {

    const [data, setData] = useState();
  
    const apiKey = `qO706hvtrjKPLwTwuCZ9XYxHnUPvhtQHSM6Ncmu8`;
    const url = `https://api.nasa.gov/techtransfer/patent/?q=10&engine&api_key=${apiKey}`
  
    const getTechTransferData = async () => {
      const res = await axios.get(url);
      const info = await res.data;
      console.log(info)
      setData(info)
    }
  
    useEffect(() => {
      getTechTransferData();
    }, [])
  
    return (
      <>
        <Head>
          <title>NASA TechPort & EPIC API</title>
          <meta name="description" content="The website showcases NASA's technologies using the TechPort and PIC API and offers daily full disc imagery of the Earth and unique astronomical events. Users can discover the technologies NASA is developing in propulsion, nanotechnology, robotics, and human health while enjoying stunning images of the universe." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/galaxy.png" />
        </Head>
        <HeaderBar />

        <Galaxy />

        <main className={styles.main}>
          <h1>Techport</h1>
          <div className={styles.bigCont}>
            <p className={styles.centeredPara}>
            Welcome to TechPort - NASA's resource for collecting and sharing 
            information about NASA-funded technology development. <br></br><br></br> Techport allows 
            the public to discover the technologies NASA is working on every day 
            to explore space, understand the universe, and improve aeronautics. <br></br><br></br> 
            NASA is developing technologies in areas such as propulsion, 
            nanotechnology, robotics, and human health. NASA is committed to 
            making its data available and machine-readable through an Application 
            Programming Interface (API) to better serve its user communities. <br></br><br></br> As 
            such, the NASA TechPort system provides a RESTful web services API to 
            make technology project data available in a machine-readable format. 
            This API can be used to export TechPort data into either an XML or a 
            JSON format, which can then be further processed and analyzed. <br></br><br></br>
            </p>

            <div>
              <p>Complete 
                documentation (in Swagger 2.0 format) of the available objects, 
                properties, RESTful URIs is available in the online API specification at:
              </p>
              <br></br><br></br>
              <p>Techport API Demo Key: https://api.nasa.gov/techport/api/specification?api_key=DEMO_KEY.</p>
              <br></br><br></br>
              <h4>The below photos are using data from one of the example querries:</h4>
              <br></br><br></br>
              <p>Techport API Project: https://api.nasa.gov/techport/api/projects/17792?api_key=DEMO_KEY</p>



            </div>

              
          </div>
          {/* <Link href='/polychromatic'>Polychromatic</Link> */}
          <Carousel />
        </main>

      </>
    )
  }
  