import React from "react";

const Date = (props) => {
    // console.log('date props', props);
    return (
    <div className="date">
        <h2>{props.date}</h2>
    </div>
    )
};

export default Date;