import React from "react";
import styled from "styled-components";
import planets from "../../data/planets.json";
import { setCurrentDescription } from "../../redux/planetReducer";

function PlanetDescription() {
  return (
    <Description>
      <h1>Mercury</h1>
      <p>{planets[0].overview.content}</p>
      <div>
        Source :{" "}
        <a
          href={planets[0].overview.source}
          target="_blank"
          rel="noreferrer noreopener"
        >
          Wikipedia
        </a>
      </div>
    </Description>
  );
}

export default PlanetDescription;

const Description = styled.div`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  height: 235px;
  margin: 0 24px 28px;

  h1 {
    text-transform: uppercase;
    font-size: 40px;
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 32px;
    line-height: 22px;
    align-items: center;
    font-weight: ${(props) => props.theme.spartanRegular};
  }

  div {
    font-size: 12px;
    a {
      color: ${(props) => props.theme.buttonOutline};
      line-height: 25px;
      font-weight: ${(props) => props.theme.spartanBold};
    }
  }
`;
