import React from "react";
import TopSelect from "../atoms/TopSelect";
import styled from "styled-components";
import planets from "../../data/planets.json";
import PlanetMetrics from "../atoms/PlanetMetrics";
import PlanetDescription from "../atoms/PlanetDescription";
import { useSelector, useDispatch } from "react-redux";
import {
  currentDescription,
  currentPlanet,
  currentPlanetIndex,
  currentDescriptionIndex,
  setCurrentDescription,
} from "../../redux/planetReducer";

function PlanetInfo({ id }) {
  const description = useSelector(currentDescription);
  const planetId = useSelector(currentPlanet);
  const descriptionIndex = useSelector(currentDescriptionIndex);
  const dispatch = useDispatch();

  return (
    <InfoWrap>
      <TopSelect />
      <PlanetWrap>
        <ImageWrap>
          <img
            src={planets[0].images.planet}
            alt={planets.name}
            width="111px"
            height="111px"
          />
        </ImageWrap>
        <PlanetDescription />
        <PlanetMetrics />
        {/* {planets.map((planet) => (
        <World key={planet.id}>Hey Guys</World>
      ))} */}
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
  /* border: 1px solid red; */
  /* background-image: none; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ImageWrap = styled.div`
  margin: 95px 132px 98px;
`;
