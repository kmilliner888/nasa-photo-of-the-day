import React, { useState, useEffect } from "react";
// import axios from "axios";
import styled from "styled-components";

import Date from "./Date";
import PhotoInfo from "./PhotoInfo";
import { TestData } from "../TestData";

const ImageStyles= styled.img `
    width: 100%;
`;


const Photo = () => {
    const [photos, setPhotos] = useState(TestData);

    // useEffect(() => {
    //     axios
    //     .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    //     .then(response => {
    //         console.log(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //     })
    // }, []);
    // // console.log("photos", photos);

    return (
        <div>
            <Date date={photos.date} />
            <ImageStyles src={photos.url} alt="Nasa Photo of the Day"/>
            <PhotoInfo title={photos.title} desc={photos.explanation} /> 
        </div> 
        
    );
};

export default Photo;