import React, { useState } from "react";
import styled from "styled-components";
import BlurbOne from "../molecules/PlanetBlurb/BlurbOne";
import BlurbTwo from "../molecules/PlanetBlurb/BlurbTwo";
import BlurbThree from "../molecules/PlanetBlurb/BlurbThree";
import { theme } from "../../styles/theme";
import { css } from "styled-components";

function TopSelect({
  overviewContent,
  structureContent,
  geologyContent,
  overviewWikipedia,
  structureWikipedia,
  geologyWikipedia,
  imagePlanet,
  imageInternal,
  imageZoom,
  name,
  smallPlanet,
  mediumPlanet,
  largePlanet,
  temperature,
  radius,
  revolution,
  rotation,
}) {
  const [activeTab, setActiveTab] = useState("overview");

  const handleOverview = () => {
    setActiveTab("overview");
  };

  const handleStructure = () => {
    setActiveTab("structure");
  };

  const handleSurface = () => {
    setActiveTab("surface");
  };

  return (
    <TopWrap>
      <Top>
        <ListWrap>
          <li
            className={activeTab === "overview" ? "active" : ""}
            onClick={handleOverview}
          >
            overview
          </li>
          <li
            className={activeTab === "structure" ? "active" : ""}
            onClick={handleStructure}
          >
            <span>internal</span> structure
          </li>
          <li
            className={activeTab === "surface" ? "active" : ""}
            onClick={handleSurface}
          >
            surface <span style={{ "padding-left": "5px" }}>geology</span>
          </li>
        </ListWrap>
        <Outlet>
          {activeTab === "overview" ? (
            <BlurbOne
              imagePlanet={imagePlanet}
              name={name}
              overviewContent={overviewContent}
              overviewWikipedia={overviewWikipedia}
              smallPlanet={smallPlanet}
              mediumPlanet={mediumPlanet}
              largePlanet={largePlanet}
              temperature={temperature}
              radius={radius}
              revolution={revolution}
              rotation={rotation}
            />
          ) : activeTab === "structure" ? (
            <BlurbTwo
              imageInternal={imageInternal}
              name={name}
              structureContent={structureContent}
              structureWikipedia={structureWikipedia}
              smallPlanet={smallPlanet}
              mediumPlanet={mediumPlanet}
              largePlanet={largePlanet}
              temperature={temperature}
              radius={radius}
              revolution={revolution}
              rotation={rotation}
            />
          ) : activeTab === "surface" ? (
            <BlurbThree
              imagePlanet={imagePlanet}
              imageZoom={imageZoom}
              name={name}
              geologyContent={geologyContent}
              geologyWikipedia={geologyWikipedia}
              smallPlanet={smallPlanet}
              mediumPlanet={mediumPlanet}
              largePlanet={largePlanet}
              temperature={temperature}
              radius={radius}
              revolution={revolution}
              rotation={rotation}
            />
          ) : (
            ""
          )}
        </Outlet>
      </Top>
    </TopWrap>
  );
}

export const PlanetColors = css`
  ${({ name, planet }) => {
    switch (name || planet) {
      case "Mercury":
        return theme.mercury;
      case "Venus":
        return theme.venus;
      case "Earth":
        return theme.earth;
      case "Mars":
        return theme.mars;
      case "Jupiter":
        return theme.jupiter;
      case "Saturn":
        return theme.saturn;
      case "Uranus":
        return theme.uranus;
      case "Neptune":
        return theme.neptune;
      default:
        return theme.venus;
    }
  }};
`;

export default TopSelect;

const TopWrap = styled.div`
  margin-bottom: 47px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Top = styled.div`
  height: 50px;
  color: ${(props) => props.theme.buttonOutline};
  font-size: 9px;
  font-weight: ${(props) => props.theme.spartanBold};
  letter-spacing: 1.93px;
  border-bottom: 1px solid ${(props) => props.theme.default};

  @media ${(props) => props.theme.tablet} {
    position: relative;
  }
`;

const Outlet = styled.div``;

const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    position: absolute;
    background-color: transparent;
    top: 516px;
    right: 24px;
    left: 447px;

    @media ${(props) => props.theme.laptop} {
      right: 165px;
      left: 800px;

      @media ${(props) => props.theme.desktop} {
        top: 527px;
        left: 925px;
      }
    }
  }

  li {
    list-style-type: none;
    margin: 0 24px;
    cursor: pointer;
    text-transform: uppercase;

    @media ${(props) => props.theme.tablet} {
      width: 281px;
      height: 40px;
      display: inline-flex;
      align-items: center;
      counter-increment: custom-counter-style;
      border: 1px solid ${(props) => props.theme.buttonOutline};
      color: ${(props) => props.theme.fontColor};
      margin-bottom: 12px;
      background: transparent;
      font-size: 9px;
      line-height: 25px;
      letter-spacing: 1.93px;

      @media ${(props) => props.theme.laptop} {
        font-size: 12px;
        line-height: 25px;
        letter-spacing: 2.57px;
        width: 330px;
        height: 48px;

        @media ${(props) => props.theme.desktop} {
          width: 350px;
        }
      }

      &:before {
        content: "0" counter(custom-counter-style);
        margin: 0 14px 0 20px;
        color: ${(props) => props.theme.buttonOutline};
      }
    }

    &:hover {
      border-bottom: 5px solid ${(props) => props.theme.mercury};
      margin-top: 23px;
      padding-bottom: 18px;
      color: ${(props) => props.theme.fontColor};

      @media ${(props) => props.theme.tablet} {
        border-bottom: unset;
        background-color: ${(props) => props.theme.default};
        margin-top: unset;
        padding-bottom: unset;
      }
    }

    &.active {
      border-bottom: 5px solid ${(props) => props.theme.mercury};
      margin-top: 23px;
      padding-bottom: 18px;
      color: ${(props) => props.theme.fontColor};

      @media ${(props) => props.theme.tablet} {
        border-bottom: unset;
        background-color: ${PlanetColors};
        margin-top: unset;
        padding-bottom: unset;
      }
    }

    span {
      display: none;

      @media ${(props) => props.theme.tablet} {
        display: unset;
        padding-right: 5px;
        background: transparent;
      }
    }
  }
`;
