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
  margin: 20px 0 28px;

  @media ${(props) => props.theme.tablet} {
    text-align: left;
  }

  h1 {
    text-transform: uppercase;
    font-size: 40px;
    margin-bottom: 16px;

    @media ${(props) => props.theme.tablet} {
      font-size: 48px;
      margin-bottom: 24px;
      margin-left: 39px;

      @media ${(props) => props.theme.laptop} {
        font-size: 80px;
        margin-left: 35px;

        @media ${(props) => props.theme.desktop} {
          margin-left: 150px;
        }
      }
    }
  }

  p {
    font-size: 11px;
    margin-bottom: 32px;
    line-height: 22px;
    align-items: center;
    font-weight: ${(props) => props.theme.spartanRegular};
    margin: 0 24px 32px;

    @media ${(props) => props.theme.tablet} {
      margin: 0 390px 32px 39px;

      @media ${(props) => props.theme.laptop} {
        font-size: 14px;
        width: 400px;
        height: 180px;
        margin: 0 0 32px 35px;

        @media ${(props) => props.theme.desktop} {
          line-height: 25px;
          margin: 0 0 32px 150px;
        }
      }
    }
  }

  div {
    font-size: 12px;

    @media ${(props) => props.theme.tablet} {
      margin-left: 39px;

      @media ${(props) => props.theme.laptop} {
        margin: -35px 0 45px 35px;

        @media ${(props) => props.theme.desktop} {
          margin: -20px 0 39px 150px;
        }
      }
    }

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
