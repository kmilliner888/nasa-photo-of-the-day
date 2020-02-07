import React from "react";
import styled from "styled-components";

const DateStyles = styled.h2 `
    color: darkgrey;
    font-size: .75rem;
    text-align: center;
    padding: 0px;
    margin: 0px;
`;

const Date = (props) => {
    // console.log('date props', props);
    return (
    <div>
        <DateStyles>{props.date}</DateStyles>
    </div>
    )
};

export default Date;