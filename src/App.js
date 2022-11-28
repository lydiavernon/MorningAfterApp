import Header from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Events from "./components/Events/Events";
import Radio from "./components/Radio/Radio";
import "./styles/partials/_resets.scss";
import Management from "./components/Management/Management";
import BoneSoda from "./components/BoneSoda/BoneSoda";
import Stussy from "./components/Stussy/Stussy";
import Carhartt from "./components/Carhartt/Carhartt";
import Always from "./components/Always/Always";

function App() {
  //morning after app
  return (
    <BrowserRouter>
      <div className="app">
        <Header className="header" />
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/contact" element={<Contact />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/events/bonesoda" element={<BoneSoda />}></Route>
            <Route path="/events/stussy" element={<Stussy />}></Route>
            <Route path="/events/carhartt" element={<Carhartt />}></Route>
            <Route
              path="/events/alwaysdowhatyoushoulddo"
              element={<Always />}
            ></Route>
            <Route path="/radio" element={<Radio />}></Route>
            <Route path="/management" element={<Management />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
