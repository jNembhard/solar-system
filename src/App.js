import { GlobalStyles } from "./styles/GlobalStyles";
import Navbar from "./components/organisms/Navbar";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from "react-router-dom";
import planets from "./data/planets.json";
import PlanetInfo from "./components/organisms/PlanetInfo";
import { AnimatePresence } from "framer-motion";
// Atomic Design Pattern

function App() {
  return (
    <>
      <Router>
        <GlobalStyles />
        <Navbar />
        <AnimatePresence exitBeforeEnter>
          <Switch>
            {planets.map((planet) => (
              <Route path={`/${planet.name}`}>
                <PlanetInfo
                  key={planet.id}
                  name={planet.name}
                  overviewContent={planet.overview.content}
                  structureContent={planet.structure.content}
                  geologyContent={planet.geology.content}
                  overviewWikipedia={planet.overview.source}
                  structureWikipedia={planet.structure.source}
                  geologyWikipedia={planet.geology.source}
                  radius={planet.radius}
                  revolution={planet.revolution}
                  rotation={planet.rotation}
                  temperature={planet.temperature}
                  imagePlanet={planet.images.planet}
                  imageInternal={planet.images.internal}
                  imageZoom={planet.images.geology}
                  smallPlanet={planet.size.small}
                  mediumPlanet={planet.size.medium}
                  largePlanet={planet.size.large}
                />
              </Route>
            ))}
            <Redirect exact path="/" to="/Earth" />
          </Switch>
        </AnimatePresence>
      </Router>
    </>
  );
}

export default App;
