import React from "react";
import styled from "styled-components";

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

  @media ${(props) => props.theme.tablet} {
    flex-direction: row;
  }
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

  @media ${(props) => props.theme.tablet} {
    width: 164px;
    height: 88px;
    display: unset;
    flex-direction: column;
    margin: 0 5.5px;

    @media ${(props) => props.theme.desktop} {
      width: 255px;
      height: 128px;
      margin: 87px 15px 0;
    }
  }

  p {
    position: relative;
    font-size: 8px;
    letter-spacing: 0.73px;
    line-height: 16px;
    color: ${(props) => props.theme.buttonOutline};
    font-weight: ${(props) => props.theme.spartanBold};
    margin-left: 24px;
    background-image: none;

    @media ${(props) => props.theme.tablet} {
      margin: 16px 16px 0;
      letter-spacing: 0.73px;
      line-height: 16px;

      @media ${(props) => props.theme.desktop} {
        font-size: 11px;
      }
    }

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

      @media ${(props) => props.theme.tablet} {
        font-size: 24px;
        letter-spacing: -0.9px;
        height: 110%;
        width: 100px;
        top: 38px;
        left: 0;
        bottom: 19px;
        text-align: left;

        @media ${(props) => props.theme.desktop} {
          font-size: 40px;
          letter-spacing: -1.5px;
          width: 180px;
          top: 42px;
        }
      }
    }
  }
`;
