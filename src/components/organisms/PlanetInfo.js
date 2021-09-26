import React from "react";
import TopSelect from "../atoms/TopSelect";
import styled from "styled-components";
import planets from "../../data/planets.json";
import PlanetMetrics from "../atoms/PlanetMetrics";
import PlanetDescription from "../atoms/PlanetDescription";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  currentDescription,
  currentPlanet,
  currentPlanetIndex,
  currentDescriptionIndex,
  setCurrentDescription,
} from "../../redux/planetReducer";

function PlanetInfo({
  images,
  name,
  content,
  wikipedia,
  rotation,
  revolution,
  radius,
  temperature,
}) {
  return (
    <InfoWrap>
      <TopSelect />
      <PlanetWrap>
        <ImageWrap>
          <img
            rel="preload"
            src={images}
            alt={name}
            width="111px"
            height="111px"
          />
        </ImageWrap>
        <PlanetDescription
          name={name}
          content={content}
          wikipedia={wikipedia}
        />
        <PlanetMetrics
          temperature={temperature}
          radius={radius}
          revolution={revolution}
          rotation={rotation}
        />
      </PlanetWrap>
    </InfoWrap>
  );
}

export default PlanetInfo;

const InfoWrap = styled.div`
  margin-bottom: 47px;
`;
const PlanetWrap = styled.div`
  font-size: 10px;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.div`
  margin: 95px 132px 98px;
`;
