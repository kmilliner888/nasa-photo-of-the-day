import React from "react";
import styled from "styled-components";

const InfoTitle = styled.h3 `
    color: darkgrey;
    font-size: 1.25rem;
    padding: 0px 120px;
`;

const InfoDesc = styled.p `
    color: darkgrey;
    font-size: .75rem;
    padding: 0px 120px 120px 120px;
`;

const PhotoInfo = (props) => {
return (
<div className="photoInformation">
    <InfoTitle>{props.title}</InfoTitle>
    <InfoDesc>{props.desc}</InfoDesc>
</div>
);

}

export default PhotoInfo;