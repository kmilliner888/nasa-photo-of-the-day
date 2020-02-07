import React from "react";
import "./App.css";
import styled from "styled-components";

import Photo from "./Components/Photo";

const AppStyles = styled.h1 `
  color: darkgrey;
  font-size: 5vw;
  text-align: center;
  opacity: .75;
  padding: 0px;
  margin: 80px 0px 20px 0px;
`;

function App() {
  return (
    <div>
      <AppStyles>NASA Photo of the Day</AppStyles>
      <Photo />
    </div>
  );
}

export default App;
