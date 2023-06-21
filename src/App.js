import { Header } from "./components/header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CreateHero } from "./pages/CreateHero";
import { HeroList } from "./pages/HeroList";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createHero" element={<CreateHero />} />
        <Route path="/heroList" element={<HeroList />} />
      </Routes>
    </div>
  );
}

export default App;
