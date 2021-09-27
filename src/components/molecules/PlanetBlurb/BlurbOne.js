import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";

function BlurbOne({ imagePlanet, name, overviewContent, overviewWikipedia }) {
  return (
    <BlurbWrap>
      <ImageWrap>
        <img
          rel="preload"
          src={imagePlanet}
          alt={name}
          width="111px"
          height="111px"
        />
        <PlanetDescription
          name={name}
          content={overviewContent}
          wikipedia={overviewWikipedia}
        />
      </ImageWrap>
    </BlurbWrap>
  );
}

export default BlurbOne;

const BlurbWrap = styled.div`
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.div`
  img {
    margin: 47.5px 132px 0;
  }
`;
