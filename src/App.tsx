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
import Gallery from "./pages/gallery";
import Vjezbe from "./pages/vjezbe";
import ProfileMaker from "./pages/profile-maker";
import DataTypes from "./pages/data-types";
import UseStateComponent from "./pages/usestatecomponent";
import Gitare from "./pages/gitare";
import Tabs from "./pages/tabs";



const App = () => {
  return (
    <>
     <Routes>
     <Route path="/" element={<Layout />}>
    <Route index element={<Home columns={0} gallery={[]} />} />
    <Route path="pokemon" element={<Pokemon />} />
    <Route path="mewtwo" element={<Mewtwo />} />
    <Route path="usestatecomponent" element={<UseStateComponent />} />
    <Route path="gallery" element={<Gallery />} />
    <Route path="croatia" element={<Croatia />} />
    <Route path="gitare" element={<Gitare />} />
    <Route path="tabs" element={<Tabs />} />
    <Route path="profile-maker" element={<ProfileMaker />} />
    <Route path="data-types" element={<DataTypes />} />
    <Route path="about" element={<About />} />
    <Route path="vjezbe" element={<Vjezbe />} />
    <Route path="history" element={"History"} />
    <Route path="statetest" element={<StateTest />} />
    <Route path="cubemovement" element={<CubeMovement />} />
    <Route path="*" element={<NoMatch />} />
  </Route>
      </Routes>
    </>
  );
};

export default App;
