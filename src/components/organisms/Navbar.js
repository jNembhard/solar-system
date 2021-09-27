import { useState } from "react";
import styled from "styled-components";
import planets from "../../data/planets.json";
import { theme } from "../../styles/theme";
import { Link } from "react-router-dom";

function NavBar() {
  const [modalOpen, setModalOpen] = useState(false);
  const [opacity, setOpacity] = useState(1);

  const toggle = () => setModalOpen(!modalOpen);

  const handleOpacity = (e) => {
    return setOpacity(e);
  };

  return (
    <Header>
      <h1>The Planets</h1>
      <Planet>
        {planets.map((planet) => (
          <PlanetContainer
            key={planet.id}
            to={`/${planet.name}`}
            style={{ textDecoration: "none" }}
            color={handleColor(planet.name)}
          >
            <li>{planet.name}</li>
          </PlanetContainer>
        ))}
      </Planet>
      <PlanetHamburger>
        <HamburgerWrapper>
          <Hamburger
            onClick={() =>
              toggle() ? handleOpacity(opacity) : handleOpacity(1.3 - opacity)
            }
            opacity={opacity}
            src={process.env.PUBLIC_URL + "/assets/icon-hamburger.svg"}
            alt=""
          />
        </HamburgerWrapper>
      </PlanetHamburger>
      <PlanetSidebar modalOpen={modalOpen}>
        {planets.map((planet) => (
          <ul>
            <Link
              key={planet.id}
              to={`/${planet.name}`}
              style={{ textDecoration: "none" }}
              onClick={() =>
                toggle() ? handleOpacity(opacity) : handleOpacity(1.3 - opacity)
              }
            >
              <li key={planet.id} onClick={() => setModalOpen(false)}>
                <Circle color={handleColor(planet.name)} />
                {planet.name}
                <Arrow
                  src={process.env.PUBLIC_URL + "/assets/icon-chevron.svg"}
                  alt=""
                />
              </li>
              <hr />
            </Link>
          </ul>
        ))}
      </PlanetSidebar>
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
  border-bottom: 1px solid ${(props) => props.theme.default};
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

const PlanetContainer = styled(Link)`
  display: none;

  li {
    list-style-type: none;
  }

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

      &:hover {
        padding-top: 70px;
        border-top: 5px solid ${(props) => props.color};

        li {
          margin-top: -50px;
        }
      }

      &.active {
        padding-top: 70px;
        border-top: 5px solid ${(props) => props.color};

        li {
          margin-top: -50px;
        }
      }
    }
  }
`;

const PlanetHamburger = styled.div`
  z-index: 5;
  margin: 26px 24px 25px 0;
  position: relative;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
`;

const Hamburger = styled.img`
  cursor: pointer;
  opacity: ${(props) => props.opacity};
`;

const PlanetSidebar = styled.div`
  position: fixed;
  top: 75px;
  bottom: 0;
  right: 0;
  left: 0;
  width: 98%;
  z-index: 10;
  padding: 20px;
  padding: 20px 50px 20px 30px;
  transform: ${(props) =>
    props.modalOpen ? "translateX(0)" : "translateX(100%)"};
  transition: transform 0.3s ease-in-out;
  background-color: ${(props) => props.theme.background};
  background-image: none;
  cursor: pointer;

  @media ${(props) => props.theme.tablet} {
    display: none;
  }
  ul {
    list-style: none;

    li {
      position: relative;
      line-height: 25px;
      letter-spacing: 1.36px;
      padding: 18px 10px;
      color: ${(props) => props.theme.fontColor};
      background-color: ${(props) => props.theme.background};
      font-weight: ${(props) => props.theme.spartanBold};
      background-image: none;
      font-size: 15px;
      padding-left: 68px;
    }

    hr {
      background-color: ${(props) => props.theme.default};
      background-image: none;
      height: 1px;
      width: 88%;
      border: none;
    }

    &:nth-child(8) {
      hr {
        display: none;
      }
    }
  }
`;

const HamburgerWrapper = styled.div``;

const Arrow = styled.img`
  position: absolute;
  top: 29px;
  right: 32px;
  bottom: 29px;
  left: 84%;

  @media (min-width: 413px) {
    left: 85%;
  }
`;

const Circle = styled.div`
  position: absolute;
  width: 20px;
  height: 20px;
  background-color: ${(props) => props.color};
  z-index: 3;
  border-radius: 100%;
  bottom: 20px;
  left: 0;
  right: 331px;
`;
