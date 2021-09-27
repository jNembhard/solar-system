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
  mediumPlanet,
  largePlanet,
  temperature,
  radius,
  revolution,
  rotation,
}) {
  // const geologySize = {
  //   large: "163px 199px",

  return (
    <BlurbWrap>
      <PlanetWrap>
        <PlanetImage>
          <source
            media="(min-width: 992px)"
            srcset={imagePlanet}
            alt={name}
            width={largePlanet}
            height={largePlanet}
          />
          <source
            media="(min-width: 767px)"
            srcset={imagePlanet}
            alt={name}
            width={mediumPlanet}
            height={mediumPlanet}
          />
          <img
            rel="preload"
            src={imagePlanet}
            alt={name}
            width={smallPlanet}
            height={smallPlanet}
          />
        </PlanetImage>
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

const PlanetImage = styled.picture`
  position: relative;
`;

const PlanetZoom = styled.img`
  position: absolute;
  bottom: 320px;
  width: 55px;
  height: 58.28px;
  background-color: transparent;

  @media ${(props) => props.theme.tablet} {
    bottom: 0;
    top: 250px;
    width: 103px;
    height: 113.5px;
  }
`;

const PlanetWrap = styled.div`
  margin: 0 0 47px;
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  picture {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 256px;
    height: 256px;
  }

  @media ${(props) => props.theme.tablet} {
    margin: unset;

    picture {
      width: 422px;
      height: 422px;
    }
  }
`;

const DescriptionWrap = styled.div`
  /* border: 1px solid red; */
`;
