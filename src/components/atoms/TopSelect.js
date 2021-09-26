import React from "react";
import planets from "../../data/planets.json";
import styled from "styled-components";

function TopSelect() {
  // const [planetData, setPlanetData] = useState();
  // const select = ["overview", "structure", "surface"];
  return (
    <Top>
      <li>overview</li>
      <li>structure</li>
      <li>surface</li>
    </Top>
  );
}

export default TopSelect;

const Top = styled.div`
  height: 50px;
  color: ${(props) => props.theme.buttonOutline};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  font-weight: ${(props) => props.theme.spartanBold};
  letter-spacing: 1.93px;
  border-bottom: 1px solid ${(props) => props.theme.default};

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
  }

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;
