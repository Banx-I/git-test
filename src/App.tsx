import Layout from "./components/layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import NoMatch from "./pages/no-match";
import Mewtwo from "./pages/mewtwo";
import Croatia from "./pages/croatia";
import Pokemon from "./pages/pokemon";
import StateTest from "./pages/statetest";
import CubeMovement from "./pages/cubeovement";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="pokemon" element={<Pokemon />}></Route>
          <Route path="mewtwo" element={<Mewtwo />} />
          <Route path="croatia" element={<Croatia />} />
          <Route path="about" element={<About />}>
            <Route path="history" element={"History"} />
          </Route>
          <Route path="statetest" element={<StateTest />} />
          <Route path="cubemovement" element={<CubeMovement />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
