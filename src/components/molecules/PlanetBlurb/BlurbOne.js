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
          <picture>
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
          </picture>
          <PlanetDescription
            name={name}
            content={overviewContent}
            wikipedia={overviewWikipedia}
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

export default BlurbOne;

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
