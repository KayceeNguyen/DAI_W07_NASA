import { useEffect, useState } from "react"
import axios from "axios";
import Image from "next/image";
import styles from '@/styles/Home.module.css'
import HeaderBar from '@/comps/header'
import Galaxy from '@/comps/galaxy'
import Head from 'next/head'

export default function Polychromatic() {

    const [image, setImage] = useState([]);
    const [images, setImages] = useState([]);
    const [time, setTime] = useState([]);
    const [date, setDate] = useState('');
    const [coords, setCoords] = useState({})

    const [active, setActive] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const apiKey = "qO706hvtrjKPLwTwuCZ9XYxHnUPvhtQHSM6Ncmu8";
    const url = `https://epic.gsfc.nasa.gov/api/natural?api_key=${apiKey}`

    const getPolychromaticData = async () => {
        const res = await axios.get(url);
        const data = await res.data;
        console.log(data)

        const caption = data[currentIndex].caption;
        const date = data[currentIndex].date.split(" ")[0];


        const date_formatted = date.replaceAll("-","/")
        console.log(date_formatted);

        let times = [];
        let images = [];

    for (let i = 0; i < data.length; i++) {
    let time = data[i].date.split(" ")[1];
    let coords = data[i].centroid_coordinates;
    let imagePath = data[i].image;
    let image = `https://epic.gsfc.nasa.gov/archive/natural/${date_formatted}/png/${imagePath}.png`;

    times.push(time);

    images.push({
        image: image,
        time: time,
        coords: coords,
        caption: caption
    });
}

    setImages(images);
    setTime(times[0]);
    setCoords([images[0].coords.lat, images[0].coords.lon]);
    setImage(images[currentIndex]);

}
    
    useEffect(() => {
        getPolychromaticData();
    }, [currentIndex]);

    const nextImage = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };
      
    const prevImage = () => {
        setCurrentIndex(
          currentIndex === 0 ? images.length - 1 : currentIndex - 1
        );
    };

    const handleImageLoad = () => {
        setActive(true);
      }

    return(
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
                <h1>Polychromatic</h1>
                <div className={styles.bigEarthContainer}>

                    <div className={styles.arrowContainer}>
                        <button  onClick={prevImage}>
                            &lt;
                        </button>
                        <button className={styles.arrow} onClick={nextImage}>
                            &gt;
                        </button>
                    </div>

                    <div className={styles.bigEarthText}>
                        <div>Time: {image.time}</div>
                        <div>Latiitude: {coords[0]}</div>
                        <div>Longtitude: {coords[1]}</div>
                    </div>

                    <Image 
                        src={image.image} 
                        alt={image.caption}
                        width={800}
                        height={800}
                        className={`${styles.earthImage} ${active ? styles.active : ''}`}
                        onLoad={handleImageLoad}
                        
                    />

                    {/* <div onClick={nextImage} className={styles.arrow}>
                        {">"}
                    </div> */}

                </div>
                

                

                {/* <table>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Latitude</th>
                            <th>Longtitude</th>
                            <th>Image</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            images.map((e, i) => {
                                return (
                                    <tr key={i}>
                                        <td>{e.time}</td>
                                        <td>{e.coords.lat}</td>
                                        <td>{e.coords.lon}</td>
                                        <td>
                                            <Image 
                                                src={e.image} 
                                                alt={i} 
                                                width={200}
                                                height={200}
                                            />
                                        </td>

                                        <td>
                                            <button onClick={() => {
                                                setImage(e.image)
                                                setTime(e.time)
                                                setCoords([e.coords.lat, e.coords.lon])
                                                console.log(image[i].image)
                                                document.body.scrollIntoView();

                                            }}>View</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table> */}
            </main>
        </>
    )
}