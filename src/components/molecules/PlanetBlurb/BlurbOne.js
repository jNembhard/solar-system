import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";
import PlanetMetrics from "../../atoms/PlanetMetrics";

function BlurbOne({
  imagePlanet,
  name,
  overviewContent,
  overviewWikipedia,
  smallPlanet,
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
          src={imagePlanet}
          alt={name}
          width={smallPlanet}
          height={smallPlanet}
        />
        <PlanetDescription
          name={name}
          content={overviewContent}
          wikipedia={overviewWikipedia}
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

export default BlurbOne;

const BlurbWrap = styled.div`
  font-size: 10px;
  color: white;
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
