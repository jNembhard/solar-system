import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";
import PlanetMetrics from "../../atoms/PlanetMetrics";

function BlurbTwo({
  imageInternal,
  name,
  smallPlanet,
  structureContent,
  structureWikipedia,
  temperature,
  radius,
  revolution,
  rotation,
}) {
  return (
    <BlurbWrap>
      <PlanetWrap>
        <img
          rel="preload"
          src={imageInternal}
          alt={name}
          width={smallPlanet}
          height={smallPlanet}
        />
        <PlanetDescription
          name={name}
          content={structureContent}
          wikipedia={structureWikipedia}
        />
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

export default BlurbTwo;

const BlurbWrap = styled.div`
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const PlanetWrap = styled.div`
  margin: 28px 0 47px;
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
