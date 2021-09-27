import React from "react";
import TopSelect from "../molecules/TopSelect";
import styled from "styled-components";

function PlanetInfo({
  imagePlanet,
  imageInternal,
  imageZoom,
  name,
  overviewContent,
  structureContent,
  geologyContent,
  overviewWikipedia,
  structureWikipedia,
  geologyWikipedia,
  rotation,
  revolution,
  radius,
  temperature,
  smallPlanet,
  mediumPlanet,
  largePlanet,
}) {
  return (
    <InfoWrap>
      <TopSelect
        name={name}
        imageInternal={imageInternal}
        imagePlanet={imagePlanet}
        imageZoom={imageZoom}
        overviewContent={overviewContent}
        geologyContent={geologyContent}
        structureContent={structureContent}
        overviewWikipedia={overviewWikipedia}
        geologyWikipedia={geologyWikipedia}
        structureWikipedia={structureWikipedia}
        smallPlanet={smallPlanet}
        mediumPlanet={mediumPlanet}
        largePlanet={largePlanet}
        temperature={temperature}
        radius={radius}
        revolution={revolution}
        rotation={rotation}
      />
    </InfoWrap>
  );
}

export default PlanetInfo;

const InfoWrap = styled.div`
  margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
