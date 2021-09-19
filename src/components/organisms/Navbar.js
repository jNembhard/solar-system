import styled from "styled-components";
import planets from "../../data/data.json";
import { theme } from "../../styles/theme";

function NavBar() {
  return (
    <Header>
      <h1> The Planets</h1>
      <Planet>
        {planets.map((planet) => (
          <PlanetContainer key={planet.id} color={handleColor(planet.name)}>
            <li className="planet__link">{planet.name}</li>
          </PlanetContainer>
        ))}
      </Planet>
      <PlanetHamburger>
        <img
          src={process.env.PUBLIC_URL + "/assets/icon-hamburger.svg"}
          alt=""
        />
      </PlanetHamburger>
    </Header>
  );
}

function handleColor(planet) {
  return planet === "Mercury"
    ? theme.mercury
    : planet === "Venus"
    ? theme.venus
    : planet === "Earth"
    ? theme.earth
    : planet === "Mars"
    ? theme.mars
    : planet === "Jupiter"
    ? theme.jupiter
    : planet === "Saturn"
    ? theme.saturn
    : planet === "Uranus"
    ? theme.uranus
    : theme.neptune;
}

export default NavBar;

const Header = styled.div`
  text-transform: uppercase;
  color: ${(props) => props.theme.fontColor};
  border-bottom: 1px solid ${(props) => props.theme.paynesGrey};
  display: flex;
  justify-content: space-between;

  @media ${(props) => props.theme.tablet} {
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${(props) => props.theme.laptop} {
      flex-direction: unset;
      align-items: unset;
      justify-content: space-between;
    }
  }

  h1 {
    letter-spacing: -1.05px;
    line-height: 100%;
    font-weight: ${(props) => props.theme.antonioMedium};
    font-size: 28px;
    margin: 16px 0 16px 24px;

    @media ${(props) => props.theme.tablet} {
      margin-bottom: 39px;

      @media ${(props) => props.theme.laptop} {
        margin: 22px 10px 27px 32px;
      }
    }
  }
`;

const Planet = styled.div`
  font-weight: ${(props) => props.theme.spartanBold};
  font-size: 11px;

  @media ${(props) => props.theme.tablet} {
    display: flex;

    @media ${(props) => props.theme.laptop} {
      align-items: center;
      justify-content: center;
      position: relative;
    }
  }
`;

const PlanetContainer = styled.ul`
  display: none;

  @media ${(props) => props.theme.tablet} {
    display: unset;
    margin: 0 16.5px 27px;
    color: ${(props) => props.theme.fontColor};
    cursor: pointer;
    letter-spacing: 1px;
    opacity: 0.6;

    &:hover {
      color: ${(props) => props.theme.fontColor};
      opacity: unset;
    }

    @media ${(props) => props.theme.laptop} {
      margin: unset;
      margin-right: 33px;
      line-height: 25px;
      letter-spacing: 1px;
      list-style-type: none;

      li {
      }

      &:hover {
        padding-top: 70px;
        border-top: 5px solid ${(props) => props.color};

        li {
          margin-top: -50px;
        }
      }
    }
  }

  .planet__link {
    list-style-type: none;
  }
`;

const PlanetHamburger = styled.div`
  margin: 26px 24px 25px 0;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;
