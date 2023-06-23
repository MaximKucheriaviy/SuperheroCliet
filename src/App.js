import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeroListPage } from "./pages/HeroListPage";
import { InfoPage } from "./pages/InfoPage";
import { CreateHero } from "./pages/CreateHero";
import { Loader } from "./components/Loader/Loader";
import { useSelector } from "react-redux";

function App() {
  const loaderState = useSelector((state) => state.loaderState.value);
  const isHeroesLoading = useSelector((state) => state.heroes.isLoading);
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createHero" element={<CreateHero />} />
        <Route path="/hero/:id" element={<InfoPage />} />
        <Route path="/heroList" element={<HeroListPage />} />
      </Routes>
      {loaderState && <Loader />}
      {isHeroesLoading && <Loader />}
    </div>
  );
}

export default App;
