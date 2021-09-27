import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";
import PlanetMetrics from "../../atoms/PlanetMetrics";

function BlurbThree({
  geologyContent,
  geologyWikipedia,
  name,
  imagePlanet,
  imageZoom,
  smallPlanet,
  temperature,
  radius,
  revolution,
  rotation,
}) {
  // const geologySize = {
  //   large: "163px 199px",
  //   medium: "80px 93.25px",
  //   small: "50px 58.28px",
  // };
  return (
    <BlurbWrap>
      <PlanetWrap>
        <PlanetImage
          rel="preload"
          src={imagePlanet}
          alt={name}
          width={smallPlanet}
          height={smallPlanet}
        />
        <PlanetZoom src={imageZoom} alt="" />
        <DescriptionWrap>
          <PlanetDescription
            name={name}
            content={geologyContent}
            wikipedia={geologyWikipedia}
          />
        </DescriptionWrap>
        <PlanetMetrics
          temperature={temperature}
          radius={radius}
          revolution={revolution}
          rotation={rotation}
        />
      </PlanetWrap>
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

const PlanetImage = styled.img`
  position: relative;
  margin: 47.5px 132px 0;
`;

const PlanetZoom = styled.img`
  position: absolute;
  bottom: 320px;
  width: 55px;
  height: 58.28px;
  background-color: transparent;
`;

const PlanetWrap = styled.div`
  margin: 0 0 47px;
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DescriptionWrap = styled.div`
  margin: 0 24px;
`;
