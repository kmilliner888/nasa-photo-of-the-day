import React from "react";

const PhotoInfo = (props) => {
return (
<div className="photoInformation">
    <h3>{props.title}</h3>
    <p>{props.desc}</p>
</div>
);

}

export default PhotoInfo;