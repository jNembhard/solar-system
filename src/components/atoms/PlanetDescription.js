import React from "react";
import styled from "styled-components";

function PlanetDescription({ name, content, wikipedia }) {
  return (
    <Description>
      <h1>{name}</h1>
      <p>{content}</p>
      <div>
        Source :{" "}
        <a href={wikipedia} target="_blank" rel="noreferrer noopener">
          Wikipedia
          <img
            src={process.env.PUBLIC_URL + "./assets/icon-source.svg"}
            alt=""
          />
        </a>
      </div>
    </Description>
  );
}

export default PlanetDescription;

const Description = styled.div`
  color: ${(props) => props.theme.fontColor};
  text-align: center;
  margin-top: 20px;
  margin-bottom: 28px;

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
    margin: 0 24px 32px;
  }

  div {
    font-size: 12px;
    a {
      color: ${(props) => props.theme.buttonOutline};
      line-height: 25px;
      font-weight: ${(props) => props.theme.spartanBold};
      img {
        margin-top: 4px;
        margin-left: 4px;
      }
    }
  }
`;
