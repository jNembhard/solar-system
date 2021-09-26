import React from "react";
import styled from "styled-components";
import planets from "../../data/planets.json";

function PlanetMetrics({ temperature, radius, revolution, rotation }) {
  const blocks = [
    { id: 1, metric: "rotation time", name: `${rotation}` },
    { id: 2, metric: "revolution time", name: `${revolution}` },
    { id: 3, metric: "radius", name: `${radius}` },
    { id: 4, metric: "average temp", name: `${temperature}` },
  ];
  return (
    <Metrics>
      {blocks.map((block) => (
        <MetricContainer>
          <p>
            {block.metric}
            <span>{block.name}</span>
          </p>
        </MetricContainer>
      ))}
    </Metrics>
  );
}

export default PlanetMetrics;

const Metrics = styled.div`
  display: flex;
  flex-direction: column;
`;

const MetricContainer = styled.div`
  text-transform: uppercase;
  width: 327px;
  height: 48px;
  border: 1px solid ${(props) => props.theme.default};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px 0;
  background-image: none;

  p {
    position: relative;
    font-size: 8px;
    letter-spacing: 0.73px;
    line-height: 16px;
    color: ${(props) => props.theme.buttonOutline};
    font-weight: ${(props) => props.theme.spartanBold};
    margin-left: 24px;
    background-image: none;

    span {
      position: absolute;
      font-size: 20px;
      font-family: "Antonio", sans-serif;
      font-weight: ${(props) => props.theme.antonioMedium};
      letter-spacing: -0.75px;
      color: ${(props) => props.theme.fontColor};
      width: 90px;
      top: 1px;
      bottom: 13px;
      left: 190px;
      height: 100%;
      text-align: right;
    }
  }
`;
