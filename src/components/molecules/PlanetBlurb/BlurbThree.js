import React from "react";
import styled from "styled-components";
import PlanetDescription from "../../atoms/PlanetDescription";
import PlanetMetrics from "../../atoms/PlanetMetrics";
import { motion } from "framer-motion";

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
            />
            <source
              media="(min-width: 767px)"
              srcSet={imagePlanet}
              alt={name}
              width={mediumPlanet}
              height={mediumPlanet}
            />
            <img
              src={imagePlanet}
              alt={name}
              width={smallPlanet}
              height={smallPlanet}
            />
          </PlanetImage>
          <ZoomContainer>
            <PlanetZoom
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              exit={{ opacity: 0 }}
              src={imageZoom}
              alt=""
            />
          </ZoomContainer>
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

const ZoomContainer = styled.div`
  position: absolute;
  width: 85px;
  height: 95px;
  bottom: ${({ name }) =>
    name === "Mercury" ? "15%" : name === "Jupiter" ? "0" : "12%"};
  margin: 0 auto;
  left: 0;
  right: 0;
  top: 300px;
  background-color: transparent;
  z-index: 2;

  @media ${(props) => props.theme.tablet} {
    width: 163px;
    height: 199px;

    @media ${(props) => props.theme.laptop} {
      top: 450px;
      bottom: ${({ name }) =>
        name === "Mercury" ? "5%" : name === "Jupiter" ? "3%" : "0"};
      left: ${({ name }) => (name === "Mercury" || "Mars" ? "-89.5%" : "0")};
      right: ${({ name }) => (name === "Mercury" || "Mars" ? "-50%" : "0")};

      @media ${(props) => props.theme.desktop} {
        left: ${({ name }) => (name === "Mercury" || "Mars" ? "-95%" : "0")};
      }
    }
  }
`;

const PlanetZoom = styled(motion.img)`
  width: 85px;
  height: 95px;
  background-color: transparent;
  background-image: none;

  @media ${(props) => props.theme.tablet} {
    width: 163px;
    height: 199px;
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

  @media ${(props) => props.theme.tablet} {
    margin: unset;
    margin-bottom: 28px;

    @media ${(props) => props.theme.laptop} {
      flex-direction: row;
    }
  }
`;

const PlanetImage = styled(motion.picture)`
  position: relative;
  bottom: -25px;

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
