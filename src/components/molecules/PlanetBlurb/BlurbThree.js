import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";

function BlurbThree({ geologyContent, geologyWikipedia, name, imageZoom }) {
  return (
    <BlurbWrap>
      <ImageWrap>
        <img
          rel="preload"
          src={imageZoom}
          alt={name}
          width="111px"
          height="111px"
        />
        <PlanetDescription
          name={name}
          content={geologyContent}
          wikipedia={geologyWikipedia}
        />
      </ImageWrap>
    </BlurbWrap>
  );
}

export default BlurbThree;

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
