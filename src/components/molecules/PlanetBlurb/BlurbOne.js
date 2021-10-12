import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";
import PlanetMetrics from "../../atoms/PlanetMetrics";
import { motion } from "framer-motion";

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
          <PlanetImage
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0 }}
          >
            <source
              media="(min-width: 992px)"
              srcSet={imagePlanet}
              alt={name}
              width={largePlanet}
              height={largePlanet}
              type="image/svg+xml"
            />
            <source
              media="(min-width: 767px)"
              srcSet={imagePlanet}
              alt={name}
              width={mediumPlanet}
              height={mediumPlanet}
              type="image/svg+xml"
            />
            <img
              src={imagePlanet}
              alt={name}
              width={smallPlanet}
              height={smallPlanet}
            />
          </PlanetImage>
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

  @media ${(props) => props.theme.tablet} {
    margin: unset;

    @media ${(props) => props.theme.laptop} {
      flex-direction: row;
    }
  }
`;

const PlanetImage = styled(motion.picture)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 256px;
  height: 256px;
  @media ${(props) => props.theme.tablet} {
    width: 422px;
    height: 422px;

    @media ${(props) => props.theme.laptop} {
      width: 666px;
      height: 666px;
      background-color: transparent;
    }
  }
`;
