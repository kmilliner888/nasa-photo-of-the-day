import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

import Date from "./Date";
import PhotoInfo from "./PhotoInfo";
import PreviousPhoto1 from "./PreviousPhoto1";

// import { TestData } from "../TestData";

const ImageStyles= styled.img `
    width: 100%;
`;


const Photo = () => {
    const [photos, setPhotos] = useState([]);
    const [photoDate, setPhotoDate] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY${photoDate}`)
        .then(response => {
            setPhotos(response.data);
            setPhotoDate(response.data);
        })
        .catch(error => {
            console.log(error);
        })
    }, [photoDate]);
    // console.log("photos", photos);

    return (
        <div>
            <Date date={photos.date} />
            <ImageStyles src={photos.url} alt="Nasa Photo of the Day"/>
            <PhotoInfo title={photos.title} desc={photos.explanation} /> 
            <PreviousPhoto1 image={photoDate.url}/>
        </div> 
        
    );
};

export default Photo;