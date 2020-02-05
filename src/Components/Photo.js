import React, { useState, useEffect } from "react";
import axios from "axios";

import Date from "./Date";
import PhotoInfo from "./PhotoInfo";

const Photo = () => {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            setPhotos(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, []);
    // console.log("photos", photos);

    return (
        <div className="photoCard">
            <Date date={photos.date} />
            <img src={photos.url} alt="Nasa Photo of the Day"></img>
            <PhotoInfo title={photos.title} desc={photos.explanation} /> 
            
        </div>
    );
};

export default Photo;