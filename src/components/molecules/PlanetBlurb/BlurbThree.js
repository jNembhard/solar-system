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
  return (
    <BlurbWrap>
      <PlanetWrap>
        <InfoWrap>
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

          <PlanetDescription
            name={name}
            content={geologyContent}
            wikipedia={geologyWikipedia}
          />
        </InfoWrap>
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

    @media ${(props) => props.theme.laptop} {
      width: 133px;
      height: 159px;
      top: 400px;
      left: 259px;

      @media ${(props) => props.theme.desktop} {
        width: 163px;
        height: 199px;
        right: 878px;
        bottom: 271px;
      }
    }
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
`;

const InfoWrap = styled.div`
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

    @media ${(props) => props.theme.laptop} {
      flex-direction: row;

      picture {
        width: 666px;
        height: 666px;
        background-color: transparent;
      }
    }
  }
`;
