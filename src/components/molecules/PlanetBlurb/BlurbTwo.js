import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";

function BlurbTwo({
  imageInternal,
  name,
  structureContent,
  structureWikipedia,
}) {
  return (
    <BlurbWrap>
      <ImageWrap>
        <img
          rel="preload"
          src={imageInternal}
          alt={name}
          width="111px"
          height="111px"
        />
        <PlanetDescription
          name={name}
          content={structureContent}
          wikipedia={structureWikipedia}
        />
      </ImageWrap>
    </BlurbWrap>
  );
}

export default BlurbTwo;

const BlurbWrap = styled.div`
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.div`
  /* margin-top: 47px 0; */
  img {
    margin: 47.5px 132px 0;
  }
`;
