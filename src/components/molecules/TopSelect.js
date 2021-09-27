import React, { useState } from "react";
import styled from "styled-components";
import BlurbOne from "./PlanetBlurb/BlurbOne";
import BlurbTwo from "./PlanetBlurb/BlurbTwo";
import BlurbThree from "./PlanetBlurb/BlurbThree";

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
          structure
        </li>
        <li
          className={activeTab === "surface" ? "active" : ""}
          onClick={handleSurface}
        >
          surface
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
  );
}

export default TopSelect;

const Top = styled.div`
  height: 50px;
  color: ${(props) => props.theme.buttonOutline};
  font-size: 9px;
  font-weight: ${(props) => props.theme.spartanBold};
  letter-spacing: 1.93px;
  border-bottom: 1px solid ${(props) => props.theme.default};
`;

const Outlet = styled.div`
  /* height: 100%; */
`;

const ListWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  li {
    list-style-type: none;
    margin: 0 24px;
    cursor: pointer;
    text-transform: uppercase;

    &:hover {
      border-bottom: 5px solid ${(props) => props.theme.mercury};
      margin-top: 23px;
      padding-bottom: 18px;
      color: ${(props) => props.theme.fontColor};
    }

    &.active {
      border-bottom: 5px solid ${(props) => props.theme.mercury};
      margin-top: 23px;
      padding-bottom: 18px;
      color: ${(props) => props.theme.fontColor};
    }
  }
`;
