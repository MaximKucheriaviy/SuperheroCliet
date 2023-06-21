import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { HeroListPage } from "./pages/HeroListPage";
import { InfoPage } from "./pages/InfoPage";
import { CreateHero } from "./pages/CreateHero";
import { EditHeroPage } from "./pages/EditHeroPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createHero" element={<CreateHero />} />
        <Route path="/hero/:id" element={<InfoPage />} />
        <Route path="/editHero/:id" element={<EditHeroPage />} />
        <Route path="/heroList" element={<HeroListPage />} />
      </Routes>
    </div>
  );
}

export default App;
