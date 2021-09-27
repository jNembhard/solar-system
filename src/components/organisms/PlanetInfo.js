import React from "react";
import TopSelect from "../molecules/TopSelect";
import styled from "styled-components";
import PlanetMetrics from "../atoms/PlanetMetrics";
// import PlanetDescription from "../atoms/PlanetDescription";

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
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */
`;

const PlanetWrap = styled.div`
  /* margin-top: 400px; */
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.div`
  /* margin: 95px 132px 98px; */
`;
