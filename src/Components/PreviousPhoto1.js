import React from "react";
import styled from "styled-components";
const ImageContainer = styled.div `
    width: 33.333%;
`;
const ImageStyles= styled.img `
    width: 100%;
`;

const PreviousPhoto1 = (props) => {
    console.log("PreviousPhoto1 props", props);
    return (
        <ImageContainer>
            <ImageStyles src={props.image} alt="Nasa Photo of the Day"/>  
        </ImageContainer>
        
    );
}

export default PreviousPhoto1;